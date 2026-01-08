import { ButtonContainer } from './styles'

type Props = {
  type: 'button'
  title: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, onClick, children }: Props): JSX.Element => {
  return (
    <ButtonContainer type={type} title={title} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
