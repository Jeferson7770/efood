import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ItemsCategories from '../../models/ItemsCategories'
import Product from '../ProductCard'
import Modal from '../Modal'
import { List } from './styles'
import { AddButton } from '../Modal/styles'
import { add, open } from '../../store/reducers/cart'
import { AppDispatch } from '../../store'

type Props = {
  itemsCategories: ItemsCategories[]
}

const ProductCardList = ({ itemsCategories }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ItemsCategories | null>(null)

  const dispatch = useDispatch<AppDispatch>()

  const addToCart = () => {
    if (!selectedItem) return

    dispatch(add(selectedItem))
    dispatch(open())
    setSelectedItem(null)
  }

  return (
    <>
      <List>
        {itemsCategories.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </List>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        image={selectedItem?.image}
        title={selectedItem?.title}
      >
        {selectedItem && (
          <>
            <h2>{selectedItem.title}</h2>

            <p>{selectedItem.description}</p>

            <p>
              <strong>Serve:</strong> {selectedItem.infos}
            </p>

            <AddButton type="button" onClick={addToCart}>
              Adicionar ao carrinho – R$ {selectedItem.price.toFixed(2)}
            </AddButton>
          </>
        )}
      </Modal>
    </>
  )
}

export default ProductCardList
