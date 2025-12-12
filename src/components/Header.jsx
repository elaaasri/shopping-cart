import { Link } from "react-router";
import { useInView } from "react-intersection-observer";

const Header = ({ cartItems, setShowSearchBox }) => {
  const { ref: triggerRef, inView } = useInView({
    threshold: 1,
  });

  const handleSearchIconClick = () => {
    setShowSearchBox(true);
  };

  return (
    <>
      <header
        className={`header-container ${!inView ? "scrolled animated" : ""}`}
      >
        <div className="header-main">
          <img
            className="header-logo"
            src="/icons/logo.png"
            alt="header logo image"
          />
          <div className="header-icons-wrapper">
            <i
              onClick={handleSearchIconClick}
              className="fa-solid fa-magnifying-glass header-icons"
            />
            <Link to="/cart" className="header-icons">
              <i className="fa-solid fa-cart-shopping" />
              <button>{cartItems.length}</button>
            </Link>
          </div>
        </div>
        <nav className="nav-container">
          <Link to="/home">HOME</Link>
          <Link to="/shop">SHOP</Link>
          {/* click to switch to footer */}
          <Link>ABOUT</Link>
        </nav>

        {/* <nav className="nav-bar-container">
        <Link to="/home">
        <button>Home</button>
        </Link>
        <Link to="/shop">
        <button>Shop</button>
        </Link>
        <Link to="/cart">
        <i className="fa-solid fa-cart-arrow-down" />
        <button>{cartItems.length}</button>
        </Link>
        </nav> */}
      </header>
      <div ref={triggerRef} className="scroll-trigger" />
    </>
  );
};
export default Header;
