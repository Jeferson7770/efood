import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Container } from '../../styles'
import Items from '../../models/Items'
import Header from '../../components/Header'
import { Restaurant } from '../../models/Restaurant'

import estrela from '../../assets/images/estrela.png'

const Home = () => {
  const [items, setItems] = useState<Items[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        const formattedItems = data.map(
          (restaurant) =>
            new Items(
              restaurant.id,
              restaurant.titulo,
              restaurant.descricao,
              restaurant.avaliacao.toFixed(1),
              estrela,
              restaurant.capa,
              [
                restaurant.tipo,
                restaurant.destacado ? 'Destaque da semana' : ''
              ].filter(Boolean)
            )
        )

        setItems(formattedItems)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao buscar restaurantes:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header />
      <Container>
        <ProductsList items={items} />
      </Container>
    </>
  )
}

export default Home
