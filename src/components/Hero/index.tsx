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

type Props = {
  image: string
  title: string
  category: string
}

const Hero = ({ image, title, category }: Props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <TopBar>
        <TopBarContent>
          <Cart onClick={() => navigate('/')}>Restaurantes</Cart>
          <Logo src={logo} alt="efood" />
          <Cart>0 produto(s) no carrinho</Cart>
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
