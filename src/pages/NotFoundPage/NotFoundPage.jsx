import styles from "./NotFoundPage.module.css";
import { Link } from "react-router";
// import NotFoundImg from "/src/assets/imgs/not-found-page-icon.webp";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPageContainer}>
      <img src={"/imgs/not-found-page-icon.webp"} />
      <div>
        <span>Oops!</span>
        <span>404</span>
        <span>We Can't Found The Page That You're Looking For :(!</span>
        <Link to="/" className={styles.link}>
          <button className={styles.button}>BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
