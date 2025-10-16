import { useState, useEffect } from "react";
const ShopPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const { products = [] } = data ?? {};
  const categories = getCategories(products);

  return (
    <div className="categories-container">
      <div className="category">
        <h1>Shop Page!</h1>
        {categories.map(({ name, img }, index) => {
          return (
            <div className="category-type" key={index}>
              <h1>{name}</h1>
              <img src={img} alt={name + " image"} />
            </div>
          );
        })}
      </div>

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
    </div>
  );
};
export default ShopPage;

const getCategories = (products) => {
  // get only unique categories :
  const categories = [...new Set(products.map((product) => product.category))];
  const categoryImgs = {
    beauty: "/imgs/beauty-img.webp",
    fragrances: "./imgs/fragrances-img.webp",
    furniture: "./imgs/furniture-img.webp",
    groceries: "./imgs/groceries-img.webp",
  };
  // add images to its right category :
  return categories.map((category) => ({
    name: category,
    img: categoryImgs[category],
  }));
};

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
