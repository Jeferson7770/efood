import { useNavigate } from 'react-router-dom'
import {
  Container,
  TopBar,
  TopBarContent,
  Logo,
  Cart,
  Banner,
  BannerContent,
  Category,
  Title
} from './styles'

import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store'

type Props = {
  image: string
  title: string
  category: string
}

const Hero = ({ image, title, category }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const items = useSelector((state: RootState) => state.cart.items)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Container>
      <TopBar>
        <TopBarContent>
          <Cart onClick={() => navigate('/')}>Restaurantes</Cart>

          <Logo src={logo} alt="efood" />

          <Cart onClick={openCart}>{items.length} produto(s) no carrinho</Cart>
        </TopBarContent>
      </TopBar>

      <Banner image={image}>
        <BannerContent>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </BannerContent>
      </Banner>
    </Container>
  )
}

export default Hero
