import { useOutletContext } from "react-router";
import PaymentSection from "../components/PaymentSection";

const CartPage = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const groupedProducts = getGroupedProducts(cartItems);
  // const [allProductsPrice, setAllProductsPrice] = useState(0);

  // filters cartItems by the removed item (using product title):
  const handleRemoveButton = (productTitle) => {
    setCartItems((prev) => prev.filter((item) => item.title !== productTitle));
  };
  let allProductsPrice = 0;

  return (
    <div className="cart-container">
      {Object.entries(groupedProducts).length}
      <h1>YOUR CART</h1>
      {Object.entries(groupedProducts).map(
        ([productTitle, productsArr], index) => {
          const { images, price } = productsArr[0];
          const totalPrice = Number(price * productsArr.length).toFixed(2);
          console.log(totalPrice);
          allProductsPrice += Number(totalPrice);
          return (
            <div key={index} className="cart-product">
              <img src={images[0]} style={{ width: "50px" }} />
              <div>title: {productTitle}</div>
              <div>price: {price}</div>
              <div>quantity: {productsArr.length}</div>
              <div>total: {totalPrice}</div>
              <button onClick={() => handleRemoveButton(productTitle)}>
                remove
              </button>
            </div>
          );
        }
      )}
      <PaymentSection allProductsPrice={allProductsPrice} />
    </div>
  );
};
export default CartPage;

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
