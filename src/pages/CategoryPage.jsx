import { useParams, useOutletContext, Link } from "react-router";
// displays products for a specific category :
const CategoryPage = () => {
  const { products, categories } = useOutletContext();
  const { category } = useParams();
  const filteredCategoryProducts = getCategoryByName(products, category);

  return (
    <div className="products-container">
      <nav className="categories-nav">
        {categories.map(({ catName }) => {
          const isClicked = catName === category;
          return (
            <Link
              to={`/shop/${catName}`}
              className={isClicked ? "clicked-category-nav" : ""}
            >
              {catName.toUpperCase()}
            </Link>
          );
        })}
      </nav>
      <div className="products-area">
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
