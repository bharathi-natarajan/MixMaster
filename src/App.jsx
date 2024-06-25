import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  HomeLayout,
  Cocktail,
  Error,
  Landing,
  About,
  Newsletter,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <About />,
  },
  {
    path: '/about',
    element: <Landing />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
