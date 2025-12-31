import { Link, useOutletContext } from "react-router";
import styles from "./ShopPage.module.css";

console.log(styles);

// displays all available product categories :
const ShopPage = () => {
  const { loading, error, categories } = useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

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
