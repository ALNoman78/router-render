import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Comments from './components/Comments/Comments';
import CommentDetails from './components/Coment Details/CommentDetails';

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
    },
    {
      path : '/comments',
      loader : () => fetch ('https://jsonplaceholder.typicode.com/comments'),
      element : <Comments></Comments>
    },
    {
      path : '/comment/:commentId',
      loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
      element : <CommentDetails></CommentDetails>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
