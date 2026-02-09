import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  rose: '#E66767',
  beige: '#FFEBD9',
  lightBeige: 'rgb(255, 248, 242)',
  white: '#FFF',
  yellow: '#FFB930',
  red: '#4b0000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
}

body{
  color: ${colors.rose};
  background-color: ${colors.lightBeige};
}
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
