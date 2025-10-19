import { useParams, useOutletContext } from "react-router";

// displays products for a specific category :
const CategoryPage = () => {
  const { products } = useOutletContext();
  const { category } = useParams();
  const categoryProducts = getCategoryProducts(products, category);

  return (
    <div className={`${category}-shop-container`}>
      <h1>Total Products: {categoryProducts.length}</h1>
      {categoryProducts.map(({ title, price, images, description, id }) => {
        return (
          <div
            className={`${category}-product`}
            key={id}
            style={{ border: "red solid 1px" }}
          >
            <div>{title}</div>
            <div>{price}</div>
            <div>{description}</div>
            <h2>{images.length}</h2>
            <img src={images[0]} alt="" style={{ width: "250px" }} />
          </div>
        );
      })}
    </div>
  );
};
export default CategoryPage;

// fitlers products by category name :
const getCategoryProducts = (products, name) => {
  return products.filter(({ category }) => {
    return category === name;
  });
};
