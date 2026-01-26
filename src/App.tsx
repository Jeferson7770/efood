import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categories/:title',
    element: <Categories />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <div className="container"></div>
      <RouterProvider router={router} />
      <Footer />
      <Cart />
    </Provider>
  )
}

export default App
