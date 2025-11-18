import { Link } from "react-router";

const PaymentSection = ({ allProductsPrice }) => {
  const handleCheckoutButton = () => {
    alert("Checkout successful!");
  };
  return (
    <div className="payment-section-container">
      <div>total : {allProductsPrice}</div>
      <div>Shipping and taxes computed at checkout</div>
      <button onClick={handleCheckoutButton}>CHECKOUT</button>
      <Link to={"/shop"}>keep shoping</Link>
    </div>
  );
};
export default PaymentSection;
