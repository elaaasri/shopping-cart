import Header from "../components/Header/Header.jsx";
import { Outlet } from "react-router";
import { useState } from "react";
import SearchBox from "../components/SearchBox.jsx";
import getCategories from "../utils/getCategories.js";
import Footer from "../components/Footer/Footer.jsx";
import useFetch from "../hooks/useFetch.js";
// import HomePage from "./pages/HomePage/HomePage.jsx";

const App = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const { products = [] } = data;
  const [cartItems, setCartItems] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const categories = getCategories(products);

  return (
    <>
      <Header cartItems={cartItems} setShowSearchBox={setShowSearchBox} />
      {showSearchBox && (
        <SearchBox setShowSearchBox={setShowSearchBox} products={products} />
      )}
      <Outlet
        context={{
          products,
          loading,
          error,
          categories,
          cartItems,
          setCartItems,
        }}
      />
      <Footer />
    </>
  );
};
export default App;
