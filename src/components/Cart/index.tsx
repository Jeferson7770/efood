import { Button } from '../ProductCard/styles'
import {
  Overlay,
  CardContainer,
  Prices,
  Sidebar,
  CardItem,
  Total,
  CartList
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/formatPrice'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />

      <Sidebar>
        <CartList>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.image} alt={item.title} />

              <div>
                <h3>{item.title}</h3>
                <span>
                  {formatPrice(item.price)} x {item.quantity}
                </span>
              </div>

              <button type="button" onClick={() => removeItem(item.id)} />
            </CardItem>
          ))}
        </CartList>

        <Total>
          <Prices>Valor total</Prices>
          <Prices>{formatPrice(getTotalPrice())}</Prices>
        </Total>

        <Button type="button" title="Continuar com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CardContainer>
  )
}

export default Cart
