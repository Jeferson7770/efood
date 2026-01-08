import { Container } from '../../styles'
import ItemsCategories from '../../models/ItemsCategories'

import marguerita from '../../assets/images/Marguerita.webp'
import bahiana from '../../assets/images/Bahiana.png'
import mexicana from '../../assets/images/Mexicana.jpg'
import frango_catupiry from '../../assets/images/Frango_catupiry.jpg'
import portuguesa from '../../assets/images/Portuguesa.webp'
import calabresa from '../../assets/images/Calabresa.jpg'
import la_dolce_vita from '../../assets/images/la_dolce.png'
import Hero from '../../components/Hero'
import ProductCardList from '../../components/ProductCardList'

const promocoes: ItemsCategories[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 2,
    title: 'Pizza Baiana',
    description:
      'Uma explosão de sabor! A Pizza Baiana combina molho de tomate, mussarela derretida, calabresa picante, ovos, pimenta e um toque especial de temperos. Perfeita para quem gosta de intensidade e personalidade.',
    image: bahiana
  },
  {
    id: 3,
    title: 'Pizza Mexicana',
    description:
      'Inspirada nos sabores do México, essa pizza traz molho de tomate, mussarela, carne temperada, pimenta, cebola e especiarias marcantes. Picante na medida certa e cheia de atitude.',
    image: mexicana
  },
  {
    id: 4,
    title: 'Pizza Frango com Catupiry ',
    description:
      'Clássica e irresistível! Frango desfiado bem temperado, coberto com Catupiry cremoso e mussarela derretida. Uma combinação suave, cremosa e extremamente saborosa.',
    image: frango_catupiry
  },
  {
    id: 5,
    title: 'Pizza Portuguesa',
    description:
      'Tradicional e completa! Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas e ervilha, criando uma mistura equilibrada de sabores que agrada em qualquer ocasião.',
    image: portuguesa
  },
  {
    id: 6,
    title: 'Pizza Calabresa',
    description:
      'A tradicional Pizza Calabresa: molho de tomate encorpado, mussarela derretida, fatias generosas de calabresa levemente picante e cebola na medida certa. Um clássico irresistível, cheio de sabor!',
    image: calabresa
  }
]

const Categories = () => (
  <>
    <Hero
      image={la_dolce_vita}
      title="La Dolce Vita Trattoria"
      category="Italiana"
    />
    <Container>
      <ProductCardList itemsCategories={promocoes} />
    </Container>
  </>
)

export default Categories
