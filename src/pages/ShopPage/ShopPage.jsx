import { Link, useOutletContext } from "react-router";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const { loading, error, categories } = useOutletContext();

  if (loading) return <h1 className={styles.loading}>Loading...</h1>;
  if (error)
    return <h1 className={styles.error}>A Network Error was Encountered!</h1>;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>CATEGORIES</h3>
      <div className={styles.grid}>
        {categories.map(({ catName, catImg }, index) => {
          return (
            <Link to={`/shop/${catName}`} className={styles.card} key={index}>
              <img
                className={styles.img}
                src={catImg}
                alt={catName + " image"}
              />
              <h5>{catName.toUpperCase()}</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ShopPage;
