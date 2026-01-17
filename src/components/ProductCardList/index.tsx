import { useState } from 'react'
import ItemsCategories from '../../models/ItemsCategories'
import Product from '../ProductCard'
import Modal from '../Modal'
import { List } from './styles'
import { AddButton } from '../Modal/styles'

type Props = {
  itemsCategories: ItemsCategories[]
}

const ProductCardList = ({ itemsCategories }: Props) => {
  const [selectedItem, setSelectedItem] = useState<ItemsCategories | null>(null)

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

            <AddButton>
              Adicionar ao carrinho - R$ {selectedItem.price.toFixed(2)}
            </AddButton>
          </>
        )}
      </Modal>
    </>
  )
}

export default ProductCardList
