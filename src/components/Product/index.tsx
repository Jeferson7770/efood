import Tag from '../Tag'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardImage,
  Content,
  Descricao,
  Titulo,
  Rating,
  Header,
  Infos
} from './style'

type Props = {
  title: string
  category: string
  estrela: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  description,
  infos,
  image,
  estrela
}: Props) => {
  const navigate = useNavigate()

  return (
    <Card>
      {/* IMAGEM */}
      <CardImage src={image} alt={title} />

      {/* TAGS */}
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>

      {/* CONTEÚDO */}
      <Content>
        <Header>
          <Titulo>{title}</Titulo>

          <Rating>
            <span>{category}</span>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </Header>

        <Descricao>{description}</Descricao>

        {/* BOTÃO */}
        <Button
          type="button"
          title={`Ver mais sobre ${title}`}
          onClick={() => navigate(`/categories/${encodeURIComponent(title)}`)}
        >
          Saiba Mais
        </Button>
      </Content>
    </Card>
  )
}

export default Product
