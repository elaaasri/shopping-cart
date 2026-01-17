import { useOutletContext } from "react-router";
import PaymentSection from "../components/PaymentSection";
// import getGroupedProducts from "../utils/getGroupedProducts";

const CartPage = () => {
  const { organizedProducts, setCartItems } = useOutletContext();
  // const [allProductsPrice, setAllProductsPrice] = useState(0);

  // filters cartItems by the removed item (using product title):
  const handleRemoveButton = (productTitle) => {
    setCartItems((prev) => prev.filter((item) => item.title !== productTitle));
  };

  let allProductsPrice = 0;

  return (
    <div className="cart-container">
      {Object.entries(organizedProducts).length}
      <h1>YOUR CART</h1>
      {Object.entries(organizedProducts).map(
        ([productTitle, productsArr], index) => {
          const { images, price } = productsArr[0];
          const totalPrice = Number(price * productsArr.length).toFixed(2);
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
        },
      )}
      <PaymentSection allProductsPrice={allProductsPrice} />
    </div>
  );
};
export default CartPage;
