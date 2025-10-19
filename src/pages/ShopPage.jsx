import { Link, useOutletContext } from "react-router";

// displays all available product categories :
const ShopPage = () => {
  const { products } = useOutletContext();
  const categories = getCategories(products);

  return (
    <div className="categories-container">
      {categories.map(({ name, img }, index) => {
        return (
          <div className={`${name}-category`} key={index}>
            <Link to={`/shop/${name}`}>
              <h1>{name}</h1>
            </Link>
            <img src={img} alt={name + " image"} />
          </div>
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
    name: category,
    img: categoryImgs[category],
  }));
};
