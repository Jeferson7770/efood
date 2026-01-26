import { HeaderBar, Logo, Title, HeaderContent } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <HeaderContent>
      <Logo src={logo} alt="efood" />
      <Title>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Title>
    </HeaderContent>
  </HeaderBar>
)

export default Header
