import { useOutletContext } from "react-router";
// import QuantityButton from "../components/QuantityButton";

const CartPage = () => {
  const { cartItems } = useOutletContext();
  const groupedProducts = getGroupedProducts(cartItems);

  return (
    <div className="cart-container">
      <h1>YOUR CART</h1>
      {Object.entries(groupedProducts).map(
        ([productTitle, products], index) => {
          const { images, price } = products[0];
          const totalPrice = (price * products.length).toFixed(2);

          return (
            <div key={index} className="cart-product">
              <img src={images[0]} style={{ width: "50px" }} />
              <div>title: {productTitle}</div>
              <div>price: {price}</div>
              <div>quantity: {products.length}</div>
              <div>total: {totalPrice}</div>
              <button>remove</button>
            </div>
          );
        }
      )}
    </div>
  );
};
export default CartPage;

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
