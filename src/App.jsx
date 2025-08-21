import React from 'react';
import Root from './routes/Root';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import Categories from './Pages/Categories/Categories';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  { 
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
       {
        path: "/about",
        element: <About />
      },
      {
        path: "/products",
        element: <Products />
      },
       {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "*",
        element: <NotFound />
      }
      
    ]
  },
]);
function App() {
  return (
      <>
      <RouterProvider router={router} />
      
      </>
  )
}

export default App