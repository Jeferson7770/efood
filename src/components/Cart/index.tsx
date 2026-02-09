import { useState } from 'react'
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

  const closeCart = () => dispatch(close())
  const removeItem = (id: number) => dispatch(remove(id))

  const getTotalPrice = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)

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
        .min(3, 'Nome muito curto')
        .max(40)
        .required('Obrigatório'),
      description: Yup.string()
        .min(5, 'Endereço curto')
        .max(60)
        .required('Obrigatório'),
      city: Yup.string().max(30).required('Obrigatório'),
      zipCode: Yup.string().min(9, 'CEP incompleto').required('Obrigatório'),
      number: Yup.string().max(10).required('Obrigatório'),
      cardName: Yup.string().when((_, schema) =>
        stage === 'payment'
          ? schema.min(3).max(40).required('Obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((_, schema) =>
        stage === 'payment'
          ? schema.min(19, 'Incompleto').required('Obrigatório')
          : schema
      ),
      cardCode: Yup.string().when((_, schema) =>
        stage === 'payment' ? schema.min(3).required('Obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((_, schema) =>
        stage === 'payment'
          ? schema
              .required('Obrigatório')
              .test(
                'val',
                'Mês inválido',
                (v) => Number(v) >= 1 && Number(v) <= 12
              )
          : schema
      ),
      expiresYear: Yup.string().when((_, schema) =>
        stage === 'payment'
          ? schema.min(4, 'Ano inválido').required('Obrigatório')
          : schema
      )
    }),
    onSubmit: async (values) => {
      if (stage === 'delivery') {
        setStage('payment')
        return
      }

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

        if (res.ok) {
          const data = await res.json()
          setOrderId(data.orderId)
          setStage('confirmed')
          dispatch(clear())
        } else {
          alert('Erro no processamento do pagamento. Verifique os dados.')
        }
      } catch {
        alert('Erro de conexão com o servidor.')
      }
    }
  })

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
                    {...formik.getFieldProps('receiver')}
                    maxLength={40}
                  />
                  <S.ErrorMessage>
                    {formik.touched.receiver && formik.errors.receiver}
                  </S.ErrorMessage>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input
                    id="description"
                    {...formik.getFieldProps('description')}
                    maxLength={60}
                  />
                  <S.ErrorMessage>
                    {formik.touched.description && formik.errors.description}
                  </S.ErrorMessage>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    {...formik.getFieldProps('city')}
                    maxLength={30}
                  />
                  <S.ErrorMessage>
                    {formik.touched.city && formik.errors.city}
                  </S.ErrorMessage>
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      mask="99999-999"
                      {...formik.getFieldProps('zipCode')}
                    >
                      {(
                        inputProps: React.InputHTMLAttributes<HTMLInputElement>
                      ) => <input id="zipCode" {...inputProps} />}
                    </InputMask>
                    <S.ErrorMessage>
                      {formik.touched.zipCode && formik.errors.zipCode}
                    </S.ErrorMessage>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      {...formik.getFieldProps('number')}
                      maxLength={10}
                    />
                    <S.ErrorMessage>
                      {formik.touched.number && formik.errors.number}
                    </S.ErrorMessage>
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
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
                  <input id="cardName" {...formik.getFieldProps('cardName')} />
                  <S.ErrorMessage>
                    {formik.touched.cardName && formik.errors.cardName}
                  </S.ErrorMessage>
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup style={{ flex: 3 }}>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      mask="9999.9999.9999.9999"
                      {...formik.getFieldProps('cardNumber')}
                    >
                      {(
                        inputProps: React.InputHTMLAttributes<HTMLInputElement>
                      ) => <input id="cardNumber" {...inputProps} />}
                    </InputMask>
                    <S.ErrorMessage>
                      {formik.touched.cardNumber && formik.errors.cardNumber}
                    </S.ErrorMessage>
                  </S.InputGroup>
                  <S.InputGroup style={{ flex: 1 }}>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask mask="999" {...formik.getFieldProps('cardCode')}>
                      {(
                        inputProps: React.InputHTMLAttributes<HTMLInputElement>
                      ) => <input id="cardCode" {...inputProps} />}
                    </InputMask>
                    <S.ErrorMessage>
                      {formik.touched.cardCode && formik.errors.cardCode}
                    </S.ErrorMessage>
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      mask="99"
                      {...formik.getFieldProps('expiresMonth')}
                    >
                      {(
                        inputProps: React.InputHTMLAttributes<HTMLInputElement>
                      ) => <input id="expiresMonth" {...inputProps} />}
                    </InputMask>
                    <S.ErrorMessage>
                      {formik.touched.expiresMonth &&
                        formik.errors.expiresMonth}
                    </S.ErrorMessage>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      mask="9999"
                      {...formik.getFieldProps('expiresYear')}
                    >
                      {(
                        inputProps: React.InputHTMLAttributes<HTMLInputElement>
                      ) => <input id="expiresYear" {...inputProps} />}
                    </InputMask>
                    <S.ErrorMessage>
                      {formik.touched.expiresYear && formik.errors.expiresYear}
                    </S.ErrorMessage>
                  </S.InputGroup>
                </S.Row>
              </>
            )}
            <S.ButtonGroup>
              <Button type="submit">
                {stage === 'delivery'
                  ? 'Continuar com o pagamento'
                  : 'Finalizar pagamento'}
              </Button>
              <Button
                type="button"
                onClick={() =>
                  setStage(stage === 'delivery' ? 'cart' : 'delivery')
                }
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
