import { useParams, useOutletContext, Link } from "react-router";

// displays products for a specific category :
const CategoryPage = () => {
  const { products, categories } = useOutletContext();
  const { category } = useParams();
  const filteredCategoryProducts = getCategoryByName(products, category);

  console.log(filteredCategoryProducts);

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
        {filteredCategoryProducts.map((categoryProduct) => {
          const {
            availabilityStatus,
            discountPercentage,
            title,
            price,
            id,
            rating,
            thumbnail,
          } = categoryProduct;
          return (
            <Link
              className="product-card"
              to={`/shop/${category}/${title}`}
              key={id}
            >
              <div className="product-img-area">
                <div>{availabilityStatus}</div>
                <img src={thumbnail} alt={title + " image"} />
              </div>
              <div className="product-infos-area">
                <div>{title.toUpperCase()}</div>
                <div>{price}$</div>
                <div>
                  {((price / (100 - discountPercentage)) * 100).toFixed(2)}$
                </div>
                {/* <div>Rating: {rating}</div> */}
              </div>
              {/* reviews */}
              {/* minimumOrderQuantity, */}
              {/* stock */}
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
