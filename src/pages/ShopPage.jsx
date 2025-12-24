import { Link, useOutletContext } from "react-router";

// displays all available product categories :
const ShopPage = () => {
  const { loading, error, categories } = useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="categories-container">
      <h3 className="categories-title">CATEGORIES</h3>
      <div className="categories-grid">
        {categories.map(({ catName, catImg }, index) => {
          return (
            <Link to={`/shop/${catName}`} className="category-card" key={index}>
              <img
                className="category-img"
                src={catImg}
                alt={catName + " image"}
              />
              <h5>{catName.toUpperCase()}</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ShopPage;
