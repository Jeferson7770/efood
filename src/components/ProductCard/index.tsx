import { Card, CardImage, CardTitle, CardDescription, Button } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const ProductCard = ({ image, title, description, onClick }: Props) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>

      <Button onClick={onClick}>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default ProductCard
