const getCategories = (products) => {
  const categories = [...new Set(products.map((product) => product.category))];
  const categoryImgs = {
    beauty: "/src/assets/imgs/beauty-img.webp",
    fragrances: "/src/assets/imgs/fragrances-img.webp",
    furniture: "/src/assets/imgs/furniture-img.webp",
    groceries: "/src/assets/imgs/groceries-img.webp",
  };

  return categories.map((category) => ({
    catName: category,
    catImg: categoryImgs[category],
  }));
};
export default getCategories;
