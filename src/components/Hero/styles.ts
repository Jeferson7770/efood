import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores, breakpoints } from '../../styles'

type BannerProps = {
  image: string
}

/* Container geral */
export const Container = styled.header`
  width: 100%;
`

/* conteúdo central (1024px) */
export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }
`

/* Barra superior */
export const TopBar = styled.div`
  background-image: url(${fundo});
  height: 186px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    height: 140px;
  }
`

export const TopBarContent = styled(Content)`
  height: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    text-align: center;
  }
`

export const Logo = styled.img`
  height: 58px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 44px;
  }
`

export const Cart = styled.span`
  font-size: 18px;
  cursor: pointer;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

/* Banner principal */
export const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 280px;

  background-image: linear-gradient(#00000080, #00000080),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const BannerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 1024px;
  margin: 0 auto;

  padding: 25px 0 32px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`

/* Categoria */
export const Category = styled.span`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  line-height: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    line-height: 24px;
  }
`

/* Título */
export const Title = styled.h1`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  line-height: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    line-height: 28px;
    margin-top: auto;
  }
`
