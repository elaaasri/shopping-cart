import { useState, useEffect } from "react";
// import { useOutletContext } from "react-router";
const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.images[0].includes("https://i.imgur.com/") &&
      product.images.length >= 2
  );

  // console.log(filteredProducts.)
  // filteredProducts.forEach((product) => {
  //   console.log(product.category.name);
  // });

  return (
    <>
      <h1>Shop Page!</h1>
      <div className="shop-container">
        <div>{filteredProducts.length}</div>

        {filteredProducts.map((product, index) => {
          return (
            <div
              className="product"
              key={index}
              style={{ border: "red solid 1px" }}
            >
              <div>{product.title}</div>
              <div>{product.price}</div>
              <div>{product.description}</div>
              {/* <div>{product.title}</div>; */}
              <img src={product.images[0]} alt="" style={{ width: "250px" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShopPage;
