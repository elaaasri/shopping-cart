import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const { products = [] } = data;

  return (
    <>
      <Header />
      <Outlet context={{ products, loading, error }} />
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
