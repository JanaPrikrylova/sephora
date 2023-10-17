import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Favourite from './pages/favourite/Favourite';
import Layout from './pages/layout/Layout';
import './App.css';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/favourite',
        element: <Favourite />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
