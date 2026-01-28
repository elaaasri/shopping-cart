import styles from "./CategoryNav.module.css";
import { Link } from "react-router";

const CategoryNav = ({ categories, categoryName }) => {
  return (
    <nav className={styles.nav}>
      {categories.map(({ catName }, index) => {
        const isClicked = catName === categoryName;
        return (
          <Link
            key={index}
            className={isClicked ? styles.clickedCategoryNav : ""}
            to={`/shop/${catName}`}
          >
            {catName.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
};
export default CategoryNav;
