import styled from 'styled-components'
import closeIcon from '../../assets/images/fechar.png'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.rose};
  z-index: 1001;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;

  h3 {
    color: ${colors.beige};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`

export const CardItem = styled.li`
  background-color: ${colors.beige};
  display: flex;
  padding: 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.rose};
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    color: ${colors.rose};
    font-size: 14px;
  }

  button {
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const Prices = styled.span`
  color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    color: ${colors.beige};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.beige};
    border: 1px solid ${colors.beige};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: bold;
    outline: none;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
`

export const ButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ErrorMessage = styled.small`
  color: ${colors.red};
  font-weight: bold;
  display: block;
  margin-top: 4px;
  height: 10px;
`

export const WarningMessage = styled.p`
  color: ${colors.beige};
  background-color: ${colors.red};
  padding: 8px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
`

export const ConfirmationContainer = styled.div`
  color: ${colors.beige};
  h3 {
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    font-weight: 400;
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

    width: 22px;
    height: 22px;

    background-color: rgba(0, 0, 0, 0.75);

    img {
      width: 18px;
      height: 18px;
    }
  }
`
export const EmptyCartMessage = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: ${colors.beige};
  text-align: center;
  margin-top: 32px;
  font-weight: bold;
`
