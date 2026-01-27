import { Link } from "react-router";

const PaymentSection = ({ organizedProducts }) => {
  const organizedProductsArr = Object.entries(organizedProducts);

  const handleCheckoutButton = () => {
    alert("Checkout successful!");
  };

  const allProductsPrice = organizedProductsArr
    .reduce((sum, [, products]) => {
      const prices = products[0].price * products.length;
      return sum + prices;
    }, 0)
    .toFixed(2);

  return (
    <div className="payment-section-container">
      <div>TOTAL : {allProductsPrice}</div>
      <div>Shipping and taxes computed at checkout</div>
      <button onClick={handleCheckoutButton}>CHECKOUT</button>
      <Link to={"/shop"}>keep shoping</Link>
    </div>
  );
};
export default PaymentSection;
