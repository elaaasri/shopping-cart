import styles from "./BreadCrumbNav.module.css";
import { Link } from "react-router";

const BreadCrumbNav = ({ category, title }) => {
  return (
    <nav className={styles.nav}>
      <Link to={"/shop"}>SHOP</Link>
      &nbsp; / &nbsp;
      <Link to={`/shop/${category}`}>{category.toUpperCase()}</Link>
      &nbsp; / &nbsp;
      <Link>{title.toUpperCase()}</Link>
    </nav>
  );
};
export default BreadCrumbNav;
