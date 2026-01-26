import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  max-width: 1024px;
  width: 100%;
  margin: 56px auto 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  list-style: none;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`
