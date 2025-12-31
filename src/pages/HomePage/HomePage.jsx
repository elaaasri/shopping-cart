import { Link } from "react-router";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <h1>ESSENTIALS.</h1>
        <h4>YOUR FAVORITE FINDS, ALL IN ONE PLACE.</h4>
        <h4>CAREFULLY SELECTED. EFFORTLESSLY YOURS.</h4>
        <Link to="/shop" className={styles.button}>
          SHOP NOW
        </Link>
      </div>
      <img className={styles.img} src="/public/imgs/hero-img2.webp" />
    </div>
  );
};
export default HomePage;
