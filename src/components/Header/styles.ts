import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { colors, breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 64px 16px 80px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 16px 64px;
    margin-bottom: 48px;
  }

  @media (max-width: 480px) {
    padding: 32px 16px 48px;
    margin-bottom: 32px;
  }
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  height: 58px;
  margin-bottom: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 48px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    height: 40px;
    margin-bottom: 32px;
  }
`

export const Title = styled.h1`
  max-width: 539px;

  font-size: 36px;
  font-weight: 900;
  line-height: 1.1;
  text-align: center;
  color: ${colors.rose};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`
