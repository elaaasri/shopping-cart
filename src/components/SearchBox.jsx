import { useState } from "react";
import { Link } from "react-router";

const SearchBox = ({ setShowSearchBox, products }) => {
  const [boxAnimation, setBoxAnimation] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCloseIconClick = () => {
    setBoxAnimation(true);
    setTimeout(() => setShowSearchBox(false), 500);
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    const searchedProducts = getSearchedProducts(value, products);
    setFilteredProducts(searchedProducts);
  };

  return (
    <>
      <div className="search-overlay" onClick={handleCloseIconClick} />
      <nav
        className={`search-bar-container ${
          !boxAnimation ? "slide-in" : "slide-out"
        }`}
      >
        <i
          className="search-close fa-solid fa-x"
          onClick={handleCloseIconClick}
        ></i>
        <h2 className="search-title">SEARCH OUR ITEMS</h2>
        <input
          onChange={(e) => handleSearchInput(e)}
          type="text"
          className="search-input"
          placeholder="search products .."
        />
        <ShowSearchProducts filteredProducts={filteredProducts} />
      </nav>
    </>
  );
};

const getSearchedProducts = (value, products) => {
  const searchValue = value.toLowerCase().trim();
  return products.filter(({ title }) =>
    title.toLowerCase().includes(searchValue)
  );
};

const ShowSearchProducts = ({ filteredProducts }) => {
  if (filteredProducts.length === 0) {
    return <h5>No Search Results</h5>;
  }

  return (
    <div className="searched-products-container">
      {filteredProducts.map((product) => {
        const { thumbnail, title, price, category, id } = product;
        return (
          <Link key={id} to={`/shop/${category}/${title}`}>
            <div className="searched-product">
              <img
                className="searched-product-img"
                src={thumbnail}
                alt={`${title} image`}
              />
              <p className="searched-product-title">{title}</p>
              <p className="searched-product-price">{price}$</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchBox;
