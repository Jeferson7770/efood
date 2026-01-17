import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  border: 1px solid ${cores.rose};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  margin-right: 80px;
  position: relative;
`

/* ocupa toda a largura do card */
export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

/* padding só no texto */
export const Content = styled.div`
  padding: 16px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rose};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rose};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rose};
  }

  img {
    width: 20px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`
