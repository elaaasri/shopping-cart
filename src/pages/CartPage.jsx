import { useOutletContext } from "react-router";
const CartPage = () => {
  const { cartItems } = useOutletContext();
  console.log(cartItems);
  return <h1>{cartItems.length}</h1>;
};
export default CartPage;
