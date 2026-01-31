import App from "./App";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/:category",
        element: <CategoryPage />,
      },
      {
        path: "shop/:category/:title",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
export default routes;
