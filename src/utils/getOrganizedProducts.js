// group an array of products into an ordered object :
const getOrganizedProducts = (array) => {
  const result = {};
  array.forEach((product) => {
    const key = product.title;
    if (result[key]) {
      result[key] = [...result[key], product];
    } else {
      result[key] = [product];
    }
  });
  return result;
};

export default getOrganizedProducts;
