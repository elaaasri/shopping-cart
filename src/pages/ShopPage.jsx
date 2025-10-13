import { useState, useEffect } from "react";
// import { useOutletContext } from "react-router";
const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  console.log(products);

  const filteredProducts = getFilteredProducts(products);
  // const categories = filteredProducts.map((product) => [
  //   product.category.name,
  //   product.category.image,
  // ]);
  // console.log(filteredProducts, filteredProducts.length);

  const unique = getUnique(filteredProducts);
  // console.log(unique, unique.length);
  // unique.map((a) => console.log(a));

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

// get unique
const getUnique = (arr) => {
  const categories = arr.map(({ category }) => [category.name, category.image]);
  return categories.filter(
    (item, index, self) =>
      index ===
      self.findIndex((other) => JSON.stringify(other) === JSON.stringify(item))
  );
};

// get filtered products with valid and multiple imgs :
const getFilteredProducts = (arr) => {
  // console.log(arr);

  let a = arr.filter(({ images }) => {
    // console.log(images);
    const hasValidImgs = images?.every((img) =>
      img?.includes("https://i.imgur.com/")
    );
    const hasMoreThanOneImg = images?.length >= 2;
    return hasMoreThanOneImg;
  });
  // console.log("result", a);
  return a;
};
