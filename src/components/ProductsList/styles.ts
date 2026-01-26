import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
