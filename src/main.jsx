import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import { cartProductsLoader } from './Loader/CartProductsLoader';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'Order-Review',
        element:<OrderReview></OrderReview>,
        loader: cartProductsLoader
      },
      {
        path:'Manage-Inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'Login',
        element:<LogIn></LogIn>
      },
      {
        path:'SignUp',
        element:<SignUp></SignUp>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
