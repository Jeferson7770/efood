import styled from 'styled-components'
import { cores } from '../../styles'

import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.rose};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const CartList = styled.ul`
  max-height: 520px;
  overflow-y: scroll;
  overflow-x: hidden;

  padding-right: 8px;
  margin: 0;
  list-style: none;

  /* Barra lateral */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Trilha */
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }

  /* Barra */
  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 8px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 8px;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
`
export const CardItem = styled.li`
  background-color: ${cores.bege};
  width: 344px;
  height: 100px;
  position: relative;
  margin-bottom: 16px;

  display: flex;
  align-items: flex-start;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }

  h3 {
    color: ${cores.rose};
    font-weight: bold;
    font-size: 18px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
  }
  button {
    background-image: url(${fechar});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;

    width: 16px;
    height: 16px;
    border: none;

    position: absolute;
    top: 76px;
    right: 8px;

    cursor: pointer;
  }
`
