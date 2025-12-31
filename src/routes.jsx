import App from "./App";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:category",
        element: <CategoryPage />,
      },
      {
        path: "/shop/:category/:title",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
];
export default routes;
