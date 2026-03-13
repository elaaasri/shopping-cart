const getCategories = (products) => {
  const categories = [...new Set(products.map((product) => product.category))];
  const categoryImgs = {
    beauty: "/imgs/beauty-img.webp",
    fragrances: "/imgs/fragrances-img.webp",
    furniture: "/imgs/furniture-img.webp",
    groceries: "/imgs/groceries-img.webp",
  };

  return categories.map((category) => ({
    catName: category,
    catImg: categoryImgs[category],
  }));
};
export default getCategories;
