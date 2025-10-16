import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <img className="logo-icon" src="/icons/logo.png" alt="logo icon" />
      <div className="form-container">
        <input
          className="input input-alt"
          placeholder="search for ur favorite product..."
          required
          type="text"
        />
        <span className="input-border input-border-alt"></span>
      </div>
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
    </header>
  );
};
export default Header;
