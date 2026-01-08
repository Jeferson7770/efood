import logo from '../../assets/images/logo.png'
import {
  FooterContainer,
  Logo,
  SocialList,
  SocialItem,
  Description
} from './styles'

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="Efood" />

    <SocialList>
      <SocialItem>
        <img src={instagram} alt="Instagram" />
      </SocialItem>
      <SocialItem>
        <img src={facebook} alt="Facebook" />
      </SocialItem>
      <SocialItem>
        <img src={twitter} alt="Twitter" />
      </SocialItem>
    </SocialList>

    <Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Description>
  </FooterContainer>
)

export default Footer
