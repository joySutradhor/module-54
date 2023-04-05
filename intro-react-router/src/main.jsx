import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './Components/Header/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Home from './Components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [{
      path:"/",
      element: <Blog></Blog>
    }, 
    {path:"/about",
    element: <About></About>},
    {
      path : "/friends",
      element: <Friends></Friends>,
      loader : ()=> fetch ("https://jsonplaceholder.typicode.com/users")
    },
    {
      path : "/friendDetails/:friendId" , 
      element: <FriendDetails></FriendDetails> ,
      loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
    {
      path:"/contact",
      element: <Contact> </Contact>
    },
    {
      path: "/blog",
      element: <Blog></Blog>
    }
  ]
  },
  
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
