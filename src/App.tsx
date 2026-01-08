import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Footer from './components/Footer'

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
    <>
      <GlobalCss />
      <div className="container"></div>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
