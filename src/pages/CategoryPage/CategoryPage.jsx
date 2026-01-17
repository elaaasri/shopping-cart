import { useParams, useOutletContext, Link } from "react-router";
import styles from "./CategoryPage.module.css";

// displays products for a specific category :
const CategoryPage = () => {
  const { products, categories } = useOutletContext();
  const { category } = useParams();
  const filteredCategoryProducts = getCategoryByName(products, category);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {categories.map(({ catName }, index) => {
          const isClicked = catName === category;
          return (
            <Link
              className={isClicked ? styles.clickedCategoryNav : ""}
              to={`/shop/${catName}`}
              key={index}
            >
              {catName.toUpperCase()}
            </Link>
          );
        })}
      </nav>
      <div className={styles.productsArea}>
        {filteredCategoryProducts.map((categoryProduct) => {
          const {
            availabilityStatus,
            discountPercentage,
            title,
            price,
            id,
            images,
          } = categoryProduct;
          return (
            <Link
              className={styles.productCard}
              to={`/shop/${category}/${title}`}
              key={id}
              state={{ test: categoryProduct }}
            >
              <div className={styles.productCardArea}>
                <div>{availabilityStatus}</div>
                <img src={images[0]} alt={title + " image"} />
              </div>
              <div className={styles.productInfosArea}>
                <div>{title.toUpperCase()}</div>
                <div>{price}$</div>
                <div>
                  {((price / (100 - discountPercentage)) * 100).toFixed(2)}$
                </div>
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
