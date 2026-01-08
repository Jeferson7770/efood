import ItemsCategories from '../../models/ItemsCategories'
import Product from '../ProductCard'
import { Container } from '../ProductsList/styles'
import { List } from './style'

export type Props = {
  itemsCategories: ItemsCategories[]
}

const ProductCardList = ({ itemsCategories }: Props) => (
  <Container>
    <div className="container">
      <List>
        {itemsCategories.map((itemsCategories) => (
          <Product
            key={itemsCategories.id}
            title={itemsCategories.title}
            description={itemsCategories.description}
            image={itemsCategories.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductCardList
