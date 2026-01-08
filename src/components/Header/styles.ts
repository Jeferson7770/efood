import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 384px;
  width: 100%;
  margin-bottom: 80px;

  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
`

export const Logo = styled.img`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  height: 58px;
`

export const Title = styled.h1`
  position: absolute;
  top: 236px;
  left: 50%;
  transform: translateX(-50%);
  width: 539px;

  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  text-align: center;
  color: ${cores.rose};
`
