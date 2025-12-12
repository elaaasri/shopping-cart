import { Link, useOutletContext } from "react-router";

// displays all available product categories :
const ShopPage = () => {
  const { products, loading, error } = useOutletContext();
  const categories = getCategories(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="categories-container">
      {categories.map(({ catName, catImg }, index) => {
        return (
          <Link to={`/shop/${catName}`} className="category-card" key={index}>
            <img src={catImg} alt={catName + " image"} />
            <h2>{catName}</h2>
          </Link>
        );
      })}
    </div>
  );
};
export default ShopPage;

// gets a list of categories with their corresponding imgs :
const getCategories = (products) => {
  // get only unique categories :
  const categories = [...new Set(products.map((product) => product.category))];
  const categoryImgs = {
    beauty: "/imgs/beauty-img.webp",
    fragrances: "./imgs/fragrances-img.webp",
    furniture: "./imgs/furniture-img.webp",
    groceries: "./imgs/groceries-img.webp",
  };

  // add imgs to its correct category :
  return categories.map((category) => ({
    catName: category,
    catImg: categoryImgs[category],
  }));
};
