// import HomePage from "../pages/HomePage";
// import ShopPage from "../pages/ShopPage";
// import CartPage from "../pages/CartPage";
// import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/shop">
        <button>Shop</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </nav>
  );
};
export default NavBar;
