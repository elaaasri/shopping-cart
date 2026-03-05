import { Link } from "react-router";
import { useInView } from "react-intersection-observer";
import logoIcon from "/src/assets/icons/logo-icon.webp";
import styles from "./Header.module.css";

const Header = ({ setShowSearchBox, organizedProducts }) => {
  const organizedProductsLength = Object.keys(organizedProducts)?.length;

  const { ref: triggerRef, inView } = useInView({
    threshold: 1,
  });

  const handleSearchIconClick = () => {
    setShowSearchBox(true);
  };

  return (
    <>
      <div
        className={`${styles.headerContainer} ${
          !inView ? `${styles.scrolled}  ${styles.animated}` : ""
        }`}
      >
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img className={styles.logo} src={logoIcon} alt="header logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/">HOME</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/cart">CART</Link>
        </nav>
        <div className={styles.iconsWrapper}>
          <i
            onClick={handleSearchIconClick}
            className={`fa-solid fa-magnifying-glass ${styles.icons}`}
            data-testid="search-icon"
          />
          <Link
            to="/cart"
            className={styles.icons}
            data-testid="cart-icon-link"
          >
            <i className="fa-solid fa-cart-shopping" />
            <button data-testid="cart-button-count">
              {organizedProductsLength}
            </button>
          </Link>
        </div>
      </div>
      <div ref={triggerRef} className={styles.scrollTrigger} />
    </>
  );
};
export default Header;
