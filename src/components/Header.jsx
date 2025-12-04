import { Link } from "react-router";

const Header = ({ cartItems, products, setShowSearchBox }) => {
  // const handleSearchButton = (e) => {
  //   const inputValue = e.target.value.toLowerCase();
  //   console.log("#".repeat(20));
  //   products.map(({ title }) => {
  //     if (title.toLowerCase().includes(inputValue.trim())) {
  //       console.log("TARGETPRODUCT:", title);
  //     }
  //   });
  // };

  const handleSearchIconClick = () => {
    setShowSearchBox(true);
  };

  return (
    <header className="header">
      <img className="logo-icon" src="/icons/logo.png" alt="logo icon" />
      <i
        onClick={handleSearchIconClick}
        style={{ cursor: "pointer" }}
        className="fa-solid fa-magnifying-glass"
      />
      <div className="form-container">
        <input
          // onChange={(e) => handleSearchButton(e)}
          className="input input-alt"
          placeholder="search for ur favorite product..."
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
          <i className="fa-solid fa-cart-arrow-down" />
          <button>{cartItems.length}</button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
