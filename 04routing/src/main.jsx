import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider ,Route, createRoutesFromElements} from 'react-router-dom'
import {Navbar,About ,Home} from './Components/index.js'
  const route = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'about',
          element:<About/>
        },
        {
          path:'home',
          element:<Home/>
        }
      ]
    }

  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
       
  </React.StrictMode>,
)
