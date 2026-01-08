import ProductsList from '../../components/ProductsList'
import { Container } from '../../styles'
import Items from '../../models/Items'

import estrela from '../../assets/images/estrela.png'
import hioki_sushi from '../../assets/images/hioki_sushi.png'
import la_dolce_vita from '../../assets/images/la_dolce.png'
import tortillas from '../../assets/images/tortilhas.jpg'
import feijoada from '../../assets/images/feijoada.webp'
import ratatouille from '../../assets/images/ratatouille.jpg'
import falafel from '../../assets/images/falafel.webp'
import Header from '../../components/Header'

const promocoes: Items[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    category: '4.9',
    estrela: estrela,
    image: hioki_sushi,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: '4.6',
    estrela: estrela,
    image: la_dolce_vita,
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'Tortillas',
    description:
      'As Tortillas trazem o melhor da culinária mexicana para a sua mesa! Panquecas macias de milho ou trigo, preparadas com receitas tradicionais e perfeitas para tacos, burritos e muito mais. Versáteis, saborosas e irresistíveis, ideais para qualquer momento. Experimente o México sem sair de casa!',
    category: '4.9',
    estrela: estrela,
    image: tortillas,
    infos: ['Mexicana']
  },
  {
    id: 4,
    title: 'Feijoada',
    description:
      'A feijoada traz o verdadeiro sabor da culinária brasileira para a sua mesa! Preparada com feijão preto, carnes selecionadas e temperos tradicionais, é um prato completo, encorpado e cheio de sabor. Acompanhamentos clássicos, aroma irresistível e aquele gostinho de comida feita com carinho. Peça já e aproveite!',
    category: '5.0',
    estrela: estrela,
    image: feijoada,
    infos: ['Brasileira']
  },
  {
    id: 5,
    title: 'Ratatouille',
    description:
      'O ratatouille traz o melhor da culinária francesa para a sua mesa! Um prato leve e cheio de sabor, preparado com legumes frescos como abobrinha, berinjela, tomate e ervas aromáticas. Colorido, saudável e irresistível, é a escolha perfeita para quem busca uma refeição equilibrada sem abrir mão do sabor. Experimente!',
    category: '4.8',
    estrela: estrela,
    image: ratatouille,
    infos: ['Francesa']
  },
  {
    id: 6,
    title: 'Falafel',
    description:
      'O falafel leva até você o melhor da culinária do Oriente Médio! Bolinhos crocantes por fora e macios por dentro, feitos à base de grão-de-bico e temperos aromáticos, cheios de sabor e tradição. Perfeitos para acompanhar saladas, pães ou molhos especiais. Uma opção leve, deliciosa e irresistível. Experimente!',
    category: '4.9',
    estrela: estrela,
    image: falafel,
    infos: ['Egito']
  }
]

const Home = () => (
  <>
    <Header />
    <Container>
      <ProductsList items={promocoes} />
    </Container>
  </>
)

export default Home
