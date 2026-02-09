import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from '../../styles'
import ItemsCategories from '../../models/ItemsCategories'
import { Restaurant } from '../../models/Restaurant'
import Hero from '../../components/Hero'
import ProductCardList from '../../components/ProductCardList'
import Loader from '../../components/Loader'

const Categories = () => {
  const { title } = useParams<{ title: string }>()
  const [items, setItems] = useState<ItemsCategories[]>([])
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        const foundRestaurant = data.find((item) => item.titulo === title)

        if (!foundRestaurant) return

        setRestaurant(foundRestaurant)

        const formattedItems: ItemsCategories[] = foundRestaurant.cardapio.map(
          (item) => ({
            id: item.id,
            title: item.nome,
            description: item.descricao,
            image: item.foto,
            price: item.preco,
            infos: item.porcao
          })
        )

        setItems(formattedItems)
        setLoading(false)
      })
  }, [title])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {restaurant && (
        <Hero
          image={restaurant.capa}
          title={restaurant.titulo}
          category={restaurant.tipo}
        />
      )}
      <Container>
        <ProductCardList itemsCategories={items} />
      </Container>
    </>
  )
}

export default Categories
