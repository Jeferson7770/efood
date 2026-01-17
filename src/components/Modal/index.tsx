import {
  Overlay,
  ModalContainer,
  CloseButton,
  Content,
  Image,
  TextContent
} from './styles'

import close from '../../assets/images/close.png'

type Props = {
  isOpen: boolean
  onClose: () => void
  image?: string
  title?: string
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, image, title, children }: Props) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={close} alt="Fechar" />
        </CloseButton>

        <Content>
          {image && <Image src={image} alt={title} />}
          <TextContent>{children}</TextContent>
        </Content>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
