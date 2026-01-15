// returns an obj with each key (product title) and its value (array of products):
const getGroupedProducts = (ungroupedProducts) => {
  return ungroupedProducts.reduce((acc, obj) => {
    const key = obj.title;
    if (acc[key]) {
      acc[key] = [...acc[key], obj]; // add the new obj to the same array !
    } else {
      acc[key] = [obj]; // add new obj!
    }
    return acc;
  }, {});
};
export default getGroupedProducts;
