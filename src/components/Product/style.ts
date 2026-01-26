import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 100%;
  max-width: 472px;
  border: 1px solid ${cores.rose};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  position: relative;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`

export const Content = styled.div`
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rose};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rose};

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rose};

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  img {
    width: 20px;

    @media (max-width: 480px) {
      width: 16px;
    }
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
