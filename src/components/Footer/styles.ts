import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const SocialList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`

export const SocialItem = styled.li`
  list-style: none;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Description = styled.p`
  max-width: 480px;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  font-weight: 400;
  color: ${cores.rose};
`
