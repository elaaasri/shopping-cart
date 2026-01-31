import { useParams, useOutletContext } from "react-router";
import styles from "./CategoryPage.module.css";
import CategoryNav from "./components/CategoryNav";
import CategoryProducts from "./components/CategoryProducts.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

const CategoryPage = () => {
  const { products, categories } = useOutletContext();
  const { category: categoryName } = useParams();

  return (
    <div className={styles.categoryContainer}>
      <CategoryNav categories={categories} categoryName={categoryName} />
      <CategoryProducts products={products} categoryName={categoryName} />
    </div>
  );
};
export default CategoryPage;
