import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Layout from './Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)