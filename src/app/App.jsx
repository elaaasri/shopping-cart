import Header from "../components/Header/Header.jsx";
import { Outlet } from "react-router";
import { useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox.jsx";
import getCategories from "../utils/getCategories.js";
import Footer from "../components/Footer/Footer.jsx";
import useFetch from "../hooks/useFetch.js";
import getOrganizedProducts from "../utils/getOrganizedProducts.js";

const App = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const { products = [] } = data;
  const [cartItems, setCartItems] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const categories = getCategories(products);
  const organizedProducts = getOrganizedProducts(cartItems);

  return (
    <>
      <Header
        organizedProducts={organizedProducts}
        setShowSearchBox={setShowSearchBox}
      />

      {showSearchBox && (
        <SearchBox setShowSearchBox={setShowSearchBox} products={products} />
      )}

      <Outlet
        context={{
          products,
          organizedProducts,
          loading,
          error,
          categories,
          setCartItems,
        }}
      />
      <Footer />
    </>
  );
};

export default App;
