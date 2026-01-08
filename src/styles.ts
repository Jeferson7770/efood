import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rose: '#E66767',
  bege: '#FFEBD9',
  begeClaro: 'rgb(255, 248, 242)',
  branco: '#FFF',
  amarelo: '#FFB930'
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
  color: ${cores.rose};
  background-color: ${cores.begeClaro};
}
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
