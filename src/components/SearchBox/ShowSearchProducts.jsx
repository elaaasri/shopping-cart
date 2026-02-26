import { Link } from "react-router";
import styles from "./ShowSearchProducts.module.css";

const ShowSearchProducts = ({ searchedProducts }) => {
  if (!searchedProducts?.length) {
    return <h5>No Search Results!</h5>;
  }

  return (
    <div className={styles.searchedProductsContainer}>
      {searchedProducts.map((product) => {
        const { thumbnail, title, price, category, id } = product;
        return (
          <Link
            className={styles.searchedProduct}
            key={id}
            to={`/shop/${category}/${title}`}
          >
            <img
              className={styles.img}
              src={thumbnail}
              alt={`${title} image`}
            />
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}$</p>
          </Link>
        );
      })}
    </div>
  );
};
export default ShowSearchProducts;
