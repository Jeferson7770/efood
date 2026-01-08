import { HeaderBar, Logo, Title } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <Logo src={logo} alt="Efood" />
    <Title>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
