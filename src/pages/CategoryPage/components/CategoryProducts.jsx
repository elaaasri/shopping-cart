import styles from "./CategoryProducts.module.css";
import { Link } from "react-router";

const CategoryProducts = ({ products, categoryName }) => {
  const filteredCategoryProducts = products?.filter(
    ({ category }) => category == categoryName,
  );

  return (
    <div className={styles.productsArea}>
      {filteredCategoryProducts.map((categoryProducts) => {
        const {
          availabilityStatus,
          discountPercentage,
          title,
          price,
          id,
          images,
        } = categoryProducts;

        return (
          <Link
            className={styles.productCard}
            to={`/shop/${categoryName}/${title}`}
            key={id}
          >
            <div className={styles.productCardArea}>
              <div>{availabilityStatus}</div>
              <img src={images?.[0]} alt={title + " image"} />
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
  );
};
export default CategoryProducts;
