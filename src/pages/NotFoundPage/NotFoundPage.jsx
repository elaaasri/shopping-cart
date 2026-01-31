import styles from "./NotFoundPage.module.css";
import { Link } from "react-router";
const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPageContainer}>
      <img src="/public/imgs/VWgkDwjNAPPpavtI.webp" />
      <div>
        <span>Oops!</span>
        <span>404</span>
        <span>We Can't Found The Page That You're Looking For :( !</span>
        <Link to="/" className={styles.link}>
          <button className={styles.button}>BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
