import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Footer from "./pages/Footer";
import getCategories from "./utils/getCategories";

function App() {
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
}

// fetches url :
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw new Error(`Request failed with status ${res.status}`);

        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
export default App;
