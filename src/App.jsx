import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const { products = [] } = data;
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet context={{ products, loading, error, cartItems, setCartItems }} />
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

// working on making each product grouped !

// const arr = [
//   { name: "elasri", zbe: 1 },
//   { name: "anas", zbe: 2 },
//   { name: "elasri", zbe: 3 },
// ];

// const grouped = arr.reduce((acc, obj) => {
//   const key = obj.name;
//   if (acc[key]) {
//     acc[key] = [...acc[key], obj];
//   } else {
//     acc[key] = [obj];
//   }
//   return acc;
// }, {});

// console.log(grouped);
