// gets a list of categories with their corresponding imgs :
const getCategories = (products) => {
  // get only unique categories :
  const categories = [...new Set(products.map((product) => product.category))];
  const categoryImgs = {
    beauty: "/imgs/beauty-img.webp",
    fragrances: "./imgs/fragrances-img.webp",
    furniture: "./imgs/furniture-img.webp",
    groceries: "/imgs/groceries-img.webp",
  };

  // add imgs to its correct category :
  return categories.map((category) => ({
    catName: category,
    catImg: categoryImgs[category],
  }));
};
export default getCategories;
