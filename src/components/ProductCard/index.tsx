import { Card, CardImage, CardTitle, CardDescription, Button } from './style'

type Props = {
  image: string
  title: string
  description: string
}

const ProductCard = ({ image, title, description }: Props) => (
  <Card>
    <CardImage src={image} alt={title} />

    <CardTitle>{title}</CardTitle>

    <CardDescription>{description}</CardDescription>

    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default ProductCard
