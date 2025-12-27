import { Link } from "react-router";
import { useInView } from "react-intersection-observer";
import styles from "./Header.module.css";

const Header = ({ cartItems, setShowSearchBox }) => {
  const { ref: triggerRef, inView } = useInView({
    threshold: 1,
  });

  const handleSearchIconClick = () => {
    setShowSearchBox(true);
  };

  return (
    <>
      <div
        className={`${styles.container} ${
          !inView ? `${styles.scrolled}  ${styles.animated}` : ""
        }`}
      >
        <img
          className={styles.logo}
          src="/public/icons/logo-icon.webp"
          alt="header logo image"
        />
        <nav className={styles.nav}>
          <Link to="/home">HOME</Link>
          <Link to="/shop">SHOP</Link>
          <Link>ABOUT</Link>
        </nav>
        <div className={styles.iconsWrapper}>
          <i
            onClick={handleSearchIconClick}
            className={`fa-solid fa-magnifying-glass ${styles.icons}`}
          />
          <Link to="/cart" className={styles.icons}>
            <i className="fa-solid fa-cart-shopping" />
            <button>{cartItems.length}</button>
          </Link>
        </div>
      </div>
      <div ref={triggerRef} className="scroll-trigger" />
    </>
  );
};
export default Header;
