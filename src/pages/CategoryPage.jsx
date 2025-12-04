import { useParams, useOutletContext, Link } from "react-router";

// displays products for a specific category :
const CategoryPage = () => {
  const { products } = useOutletContext();
  const { category } = useParams();
  const filteredCategoryProducts = getCategoryByName(products, category);

  return (
    <div className="shop-products-container">
      <h1>Total Products: {filteredCategoryProducts.length}</h1>
      {filteredCategoryProducts.map(({ title, price, images, id }) => {
        return (
          <Link
            to={`/shop/${category}/${title}`}
            className="product-card"
            key={id}
          >
            <div key={id}>
              <img src={images[0]} alt="" style={{ width: "250px" }} />
              <div>{title}</div>
              <div>{price}</div>
              <h2>image length : {images.length}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default CategoryPage;

// fitlers products by category name :
const getCategoryByName = (products, name) => {
  return products.filter(({ category }) => {
    return category === name;
  });
};
