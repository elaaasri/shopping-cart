import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const { products = [] } = data;

  return (
    <>
      <Header />
      <Outlet context={{ products }} />
    </>
  );
}

export default App;
