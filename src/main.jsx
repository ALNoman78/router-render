import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
      path : '/about',
      element : <div>This is about page of mine</div>
    },
    {
      path : '/user',
      loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
      element : <Users></Users>
    },
    {
      path : '/portfolio',
      element : <div>This is portfolio page</div>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
