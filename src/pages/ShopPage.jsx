import { useState, useEffect } from "react";

// import "./style.css";

// import { useOutletContext } from "react-router";
const ShopPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const { products = [] } = data ?? {};

  // const categories = products.map((product) => {
  //   return product.category;
  // });

  // const test = categories.filter((category, index, self) => {
  //   const otherIndex = self.findIndex(
  //     (other) => JSON.stringify(category) === JSON.stringify(other)
  //   );
  //   return index === otherIndex;
  // });

  // console.log("result", test);

  const categories = [...new Set(products.map((product) => product.category))];
  console.log(categories);

  // const { carts } = data;
  // console.log(carts);
  // console.log(data);

  // carts?.forEach((cart) => {
  //   console.log(cart.products);
  // });

  // products?.map((product) => {
  // console.log(product.category);
  // });

  // const filteredProducts = getFilteredProducts(products);
  // const categories = filteredProducts.map((product) => [
  //   product.category.name,~
  //   product.category.image,
  // ]);
  // console.log(filteredProducts, filteredProducts.length);

  // const unique = getUnique(filteredProducts);
  // console.log(unique, unique.length);
  // unique.map((a) => console.log(a));

  return (
    <>
      <div className="category-container">
        <h1>Shop Page!</h1>
        {categories.map((category, index) => {
          const condition = category === "beauty" && "/lotus.png";

          return (
            <div className="category-type" key={index}>
              <h1>{category}</h1>
              <img src={condition} alt="" />
            </div>
          );
        })}
      </div>
      {/* [ "beauty", "fragrances", "furniture", "groceries" ] */}

      {/* <div className="shop-container">
        <div>{products.length}</div>
        {products.map(({ title, price, images, description }, index) => {
          return (
            <div
              className="product"
              key={index}
              style={{ border: "red solid 1px" }}
            >
              <div>{title}</div>
              <div>{price}</div>
              <div>{description}</div>
              <h1>{images.length}</h1>
              <img src={images[0]} alt="" style={{ width: "250px" }} />
            </div>
          );
        })}
      </div> */}
    </>
  );
};
export default ShopPage;

// get unique
// const getUnique = (arr) => {
//   const categories = arr.map(({ category }) => [category.name, category.image]);
//   return categories.filter(
//     (item, index, self) =>
//       index ===
//       self.findIndex((other) => JSON.stringify(other) === JSON.stringify(item))
//   );
// };

// // get filtered products with valid and multiple imgs :
// const getFilteredProducts = (arr) => {
//   // console.log(arr);

//   let a = arr.filter(({ images }) => {
//     // console.log(images);
//     const hasValidImgs = images?.every((img) =>
//       img?.includes("https://i.imgur.com/")
//     );
//     const hasMoreThanOneImg = images?.length >= 2;
//     return hasMoreThanOneImg;
//   });
//   // console.log("result", a);
//   return a;
// };
