import Items from '../../models/Items'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  items: Items[]
}

const ProductsList = ({ items }: Props) => (
  <Container>
    <div className="container">
      <List>
        {items.map((items) => (
          <Product
            key={items.id}
            title={items.title}
            description={items.description}
            category={items.category}
            estrela={items.estrela}
            image={items.image}
            infos={items.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
