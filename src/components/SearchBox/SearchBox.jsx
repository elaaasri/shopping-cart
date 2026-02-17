import { useState } from "react";
import styles from "./SearchBox.module.css";
import ShowSearchProducts from "./ShowSearchProducts";

const SearchBox = ({ setShowSearchBox, products }) => {
  const [boxAnimation, setBoxAnimation] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleCloseIconClick = () => {
    setBoxAnimation(true);
    setTimeout(() => setShowSearchBox(false), 500);
  };

  const handleSearchInput = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    const filteredProducts = products?.filter(({ title }) =>
      title.toLowerCase().includes(searchValue),
    );
    setSearchedProducts(filteredProducts);
  };

  return (
    <>
      <div
        className={styles.searchOverlay}
        onClick={handleCloseIconClick}
        data-testid="search-overlay"
      />
      <nav
        className={`${styles.searchBarContainer} ${
          !boxAnimation ? styles.slideIn : styles.slideOut
        }`}
      >
        <i
          className={`${styles.close} fa-solid fa-x`}
          onClick={handleCloseIconClick}
        ></i>
        <h2 className={styles.title}>SEARCH OUR ITEMS</h2>
        <input
          className={styles.input}
          onChange={(e) => handleSearchInput(e)}
          type="text"
          placeholder="search products .."
        />
        <ShowSearchProducts searchedProducts={searchedProducts} />
      </nav>
    </>
  );
};

export default SearchBox;
