import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  z-index: 10;
`

export const ModalContainer = styled.div`
  background-color: ${colors.rose};
  width: 100%;
  max-width: 960px;

  padding: 32px;
  position: relative;
  color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: none;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
    display: block;
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;

    width: 40px;
    height: 40px;

    background-color: rgba(0, 0, 0, 0.75);

    img {
      width: 18px;
      height: 18px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 24px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 100%;
    height: 200px;
  }
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

  background-color: ${colors.beige};
  color: ${colors.rose};

  border: none;
  padding: 8px 16px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;
  }
`
