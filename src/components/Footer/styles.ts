import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  padding: 64px 16px;
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 16px;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
    margin-top: 64px;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    width: 100px;
    margin-bottom: 24px;
  }
`

export const SocialList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  padding: 0;

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`

export const SocialItem = styled.li`
  list-style: none;

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }
`

export const Description = styled.p`
  max-width: 480px;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  font-weight: 400;
  color: ${cores.rose};

  @media (max-width: 480px) {
    font-size: 9px;
    line-height: 13px;
    max-width: 320px;
  }
`
