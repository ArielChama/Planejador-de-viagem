import { createBrowserRouter} from 'react-router-dom'
import App from './App'
import { RouterProvider } from 'react-router'
import TripDetails from './TripDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/trips",
    element: <TripDetails />
  },
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes