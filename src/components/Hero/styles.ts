import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

type BannerProps = {
  image: string
}

/* Container geral */
export const Container = styled.header`
  width: 100%;
`

/* conteúdo (1024px) */
export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 900;
`

export const TopBar = styled.div`
  background-image: url(${fundo});
  height: 186px;
  width: 100%;
`

export const TopBarContent = styled(Content)`
  height: 100%;
`

export const Logo = styled.img`
  height: 58px;
`

export const Cart = styled.span`
  font-size: 18px;
  cursor: pointer;
  font-weight: 900;
`

export const Banner = styled.div<BannerProps>`
  height: 280px;
  width: 100%;
  background-image: linear-gradient(#00000080, #00000080),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`

export const BannerContent = styled(Content)`
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-top: 25px;
  padding-bottom: 32px;
  gap: 156px;
`

export const Category = styled.span`
  order: 1;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  line-height: 32px;
`

export const Title = styled.h1`
  order: 2;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  line-height: 32px;
`
