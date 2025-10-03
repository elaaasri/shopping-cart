import NavBar from "./components/NavBar";
import Header from "./components/Header ";
import { useEffect, useState } from "react";
// import fetchAPI from "./utils/fetchapi";
import { Outlet } from "react-router";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then(setData);
  }, []);

  // console.log(data);
  // console.log(data.length);

  return (
    <>
      <Header />
      <Outlet />
      {/* <div className="shop-container">
        {data.map((product) => {
          return (
            <div className="product" style={{ border: "red solid 1px" }}>
              <div>{product.title}</div>;
              <img src={product.images[0]} alt="" style={{ width: "250px" }} />
              {console.log(product.category.image)}
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
