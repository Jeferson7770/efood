import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const ModalContainer = styled.div`
  background-color: ${cores.rose};
  width: 960px;
  padding: 32px;
  position: relative;
  color: ${cores.branco};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 32px;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const TextContent = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  strong {
    font-weight: 700;
  }
`

export const AddButton = styled.button`
  margin-top: 16px;

  background-color: ${cores.bege};
  color: ${cores.rose};

  border: none;
  padding: 4px 8px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
