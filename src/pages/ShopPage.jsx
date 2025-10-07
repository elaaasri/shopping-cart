import { useState, useEffect } from "react";
// import { useOutletContext } from "react-router";
const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const filteredProducts = products.filter(({ images }) => {
    const hasValidImgs = images?.every((img) =>
      img?.includes("https://i.imgur.com/")
    );
    const hasMoreThanOneImg = images?.length >= 2;
    return hasValidImgs && hasMoreThanOneImg;
  });

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
              <img src={product.images[0]} alt="" style={{ width: "250px" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShopPage;
