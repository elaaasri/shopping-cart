import { Link } from "react-router";
import styles from "./HomePage.module.css";
import heroImage from "/src/assets/imgs/hero-img.webp";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.heroContent}>
        <h1>ESSENTIALS.</h1>
        <h4>YOUR FAVORITE FINDS, ALL IN ONE PLACE.</h4>
        <h4>CAREFULLY SELECTED. EFFORTLESSLY YOURS.</h4>
        <Link to="/shop" className={styles.button}>
          SHOP NOW
        </Link>
      </div>
      <img className={styles.img} src={heroImage} data-testid="hero-image" />
    </div>
  );
};
export default HomePage;
