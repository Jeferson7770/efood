import { useState, InputHTMLAttributes } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootState } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/formatPrice'

import closeIcon from '../../assets/images/close.png'

import * as S from './styles'
import { Button } from '../ProductCard/styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const [stage, setStage] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmed'
  >('cart')
  const [orderId, setOrderId] = useState('')
  const [isLoadingCep, setIsLoadingCep] = useState(false)
  const [cepAutoFilled, setCepAutoFilled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const closeCart = () => dispatch(close())
  const removeItem = (id: number) => dispatch(remove(id))

  const getTotalPrice = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)

  const isValidCardNumber = (cardNumber: string) => {
    const cleaned = cardNumber.replace(/\D/g, '')
    if (cleaned.length !== 16) return false

    let sum = 0
    let shouldDouble = false

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i])
      if (shouldDouble) {
        digit *= 2
        if (digit > 9) digit -= 9
      }
      sum += digit
      shouldDouble = !shouldDouble
    }
    return sum % 10 === 0
  }

  const formik = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('Obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
      zipCode: Yup.string()
        .required('Obrigatório')
        .test('cep-valid', 'CEP incompleto', (value) => {
          if (!value) return false
          return value.replace(/\D/g, '').length === 8
        }),
      number: Yup.string().required('Obrigatório'),
      cardName: Yup.string().when([], {
        is: () => stage === 'payment',
        then: (schema) => schema.required('Obrigatório'),
        otherwise: (schema) => schema
      }),
      cardNumber: Yup.string().when([], {
        is: () => stage === 'payment',
        then: (schema) =>
          schema
            .required('Obrigatório')
            .test('card-length', 'Cartão incompleto', (value) => {
              if (!value) return false
              return value.replace(/\D/g, '').length === 16
            })
            .test('card-luhn', 'Número de cartão inválido', (value) =>
              value ? isValidCardNumber(value) : false
            ),
        otherwise: (schema) => schema
      }),
      cardCode: Yup.string().when([], {
        is: () => stage === 'payment',
        then: (schema) =>
          schema
            .required('Obrigatório')
            .test('cvv-length', 'CVV inválido', (value) => {
              if (!value) return false
              return value.replace(/\D/g, '').length === 3
            }),
        otherwise: (schema) => schema
      }),
      expiresMonth: Yup.string().when([], {
        is: () => stage === 'payment',
        then: (schema) =>
          schema
            .required('Obrigatório')
            .test('month-valid', 'Mês inválido', (value) => {
              if (!value) return false
              const month = Number(value)
              return month >= 1 && month <= 12
            }),
        otherwise: (schema) => schema
      }),
      expiresYear: Yup.string().when([], {
        is: () => stage === 'payment',
        then: (schema) =>
          schema
            .required('Obrigatório')
            .test('year-valid', 'Ano inválido', (value) => {
              if (!value) return false
              const currentYear = new Date().getFullYear()
              const enteredYear = Number(value)
              return (
                enteredYear >= currentYear && enteredYear <= currentYear + 10
              )
            }),
        otherwise: (schema) => schema
      })
    }),
    onSubmit: async (values) => {
      if (stage === 'delivery') {
        setStage('payment')
        return
      }

      setIsSubmitting(true)

      const payload = {
        products: items.map((i) => ({ id: i.id, price: i.price })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode.replace(/\D/g, ''),
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber.replace(/\D/g, ''),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      }

      try {
        const res = await fetch(
          'https://api-ebac.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }
        )

        if (!res.ok) throw new Error()

        const data = await res.json()
        setOrderId(data.orderId)
        setStage('confirmed')
        dispatch(clear())
      } catch (err) {
        console.error(err)
        alert(
          'Erro ao processar pagamento. Verifique os dados e tente novamente.'
        )
      } finally {
        setIsSubmitting(false)
      }
    }
  })

  const getErrorMessage = (fieldName: keyof typeof formik.values) => {
    const isTouched = formik.touched[fieldName]
    const error = formik.errors[fieldName]
    return isTouched && error ? error : ''
  }

  const fetchAddressByCep = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, '')
    if (cleanCep.length !== 8) return

    try {
      setIsLoadingCep(true)
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
      const data = await response.json()

      if (data.erro) {
        formik.setFieldError('zipCode', 'CEP não encontrado')
        setCepAutoFilled(false)
        return
      }

      formik.setFieldValue('description', data.logradouro)
      formik.setFieldValue('city', data.localidade)
      setCepAutoFilled(true)
      formik.setFieldError('zipCode', '')
    } catch (error) {
      console.error(error)
      formik.setFieldError('zipCode', 'Erro ao buscar CEP')
      setCepAutoFilled(false)
    } finally {
      setIsLoadingCep(false)
    }
  }

  return (
    <S.CardContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.CloseButton onClick={closeCart} type="button">
          <img src={closeIcon} alt="Fechar carrinho" />
        </S.CloseButton>

        {stage === 'cart' && (
          <>
            {items.length > 0 ? (
              <>
                <S.CartList>
                  {items.map((item) => (
                    <S.CardItem key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <div>
                        <h3>{item.title}</h3>
                        <span>
                          {item.quantity}x – {formatPrice(item.price)}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      />
                    </S.CardItem>
                  ))}
                </S.CartList>
                <S.Total>
                  <S.Prices>Valor total</S.Prices>
                  <S.Prices>{formatPrice(getTotalPrice())}</S.Prices>
                </S.Total>
                <Button type="button" onClick={() => setStage('delivery')}>
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <S.EmptyCartMessage>
                O carrinho está vazio. Adicione pelo menos um item para
                prosseguir com a compra.
              </S.EmptyCartMessage>
            )}
          </>
        )}

        {(stage === 'delivery' || stage === 'payment') && (
          <form onSubmit={formik.handleSubmit}>
            {stage === 'delivery' ? (
              <>
                <h3>Entrega</h3>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    type="text"
                    {...formik.getFieldProps('receiver')}
                    maxLength={40}
                  />
                  <S.ErrorMessage>{getErrorMessage('receiver')}</S.ErrorMessage>
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input
                    id="description"
                    type="text"
                    {...formik.getFieldProps('description')}
                    maxLength={60}
                    disabled={cepAutoFilled}
                  />
                  <S.ErrorMessage>
                    {getErrorMessage('description')}
                  </S.ErrorMessage>
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    {...formik.getFieldProps('city')}
                    maxLength={30}
                    disabled={cepAutoFilled}
                  />
                  <S.ErrorMessage>{getErrorMessage('city')}</S.ErrorMessage>
                </S.InputGroup>

                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      mask="99999-999"
                      value={formik.values.zipCode}
                      onChange={(e) => {
                        formik.handleChange(e)
                        if (e.target.value.replace(/\D/g, '').length === 8) {
                          fetchAddressByCep(e.target.value)
                        }
                      }}
                      onBlur={formik.handleBlur}
                      name="zipCode"
                    >
                      {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                        <div style={{ position: 'relative' }}>
                          <input id="zipCode" type="text" {...inputProps} />
                          {isLoadingCep && (
                            <span
                              style={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: 12,
                                color: '#999'
                              }}
                            >
                              Buscando...
                            </span>
                          )}
                        </div>
                      )}
                    </InputMask>
                    <S.ErrorMessage>
                      {getErrorMessage('zipCode')}
                    </S.ErrorMessage>
                  </S.InputGroup>

                  <S.InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      {...formik.getFieldProps('number')}
                      maxLength={10}
                    />
                    <S.ErrorMessage>{getErrorMessage('number')}</S.ErrorMessage>
                  </S.InputGroup>
                </S.Row>

                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    {...formik.getFieldProps('complement')}
                    maxLength={100}
                  />
                </S.InputGroup>
              </>
            ) : (
              <>
                <h3>
                  Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                </h3>
                <S.InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    type="text"
                    {...formik.getFieldProps('cardName')}
                  />
                  <S.ErrorMessage>{getErrorMessage('cardName')}</S.ErrorMessage>
                </S.InputGroup>

                <S.Row>
                  <S.InputGroup style={{ flex: 3 }}>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      mask="9999.9999.9999.9999"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="cardNumber"
                    >
                      {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                        <input id="cardNumber" type="text" {...inputProps} />
                      )}
                    </InputMask>
                    <S.ErrorMessage>
                      {getErrorMessage('cardNumber')}
                    </S.ErrorMessage>
                  </S.InputGroup>

                  <S.InputGroup style={{ flex: 1 }}>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      mask="999"
                      value={formik.values.cardCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="cardCode"
                    >
                      {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                        <input id="cardCode" type="text" {...inputProps} />
                      )}
                    </InputMask>
                    <S.ErrorMessage>
                      {getErrorMessage('cardCode')}
                    </S.ErrorMessage>
                  </S.InputGroup>
                </S.Row>

                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      mask="99"
                      value={formik.values.expiresMonth}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="expiresMonth"
                    >
                      {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                        <input id="expiresMonth" type="text" {...inputProps} />
                      )}
                    </InputMask>
                    <S.ErrorMessage>
                      {getErrorMessage('expiresMonth')}
                    </S.ErrorMessage>
                  </S.InputGroup>

                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      mask="9999"
                      value={formik.values.expiresYear}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="expiresYear"
                    >
                      {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                        <input id="expiresYear" type="text" {...inputProps} />
                      )}
                    </InputMask>
                    <S.ErrorMessage>
                      {getErrorMessage('expiresYear')}
                    </S.ErrorMessage>
                  </S.InputGroup>
                </S.Row>
              </>
            )}

            <S.ButtonGroup>
              <Button type="submit" disabled={!formik.isValid || isSubmitting}>
                {isSubmitting
                  ? 'Processando...'
                  : stage === 'delivery'
                  ? 'Continuar com o pagamento'
                  : 'Finalizar pagamento'}
              </Button>

              <Button
                type="button"
                onClick={() =>
                  setStage(stage === 'delivery' ? 'cart' : 'delivery')
                }
                disabled={isSubmitting}
              >
                Voltar
              </Button>
            </S.ButtonGroup>
          </form>
        )}

        {stage === 'confirmed' && (
          <S.ConfirmationContainer>
            <h3>Pedido realizado - {orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido...
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <Button
              onClick={() => {
                closeCart()
                setStage('cart')
                setOrderId('')
                formik.resetForm()
              }}
            >
              Concluir
            </Button>
          </S.ConfirmationContainer>
        )}
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Cart
