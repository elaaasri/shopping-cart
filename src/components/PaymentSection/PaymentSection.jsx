import { Link } from "react-router";
import styles from "./PaymentSection.module.css";

const PaymentSection = ({ organizedProducts }) => {
  const handleCheckoutButton = () => {
    alert("Checkout successful!");
  };

  const allProductsPrice = Object.entries(organizedProducts)
    .reduce((sum, [, products]) => {
      const prices = products[0].price * products.length;
      return sum + prices;
    }, 0)
    .toFixed(2);

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.priceArea}>
        <span>TOTAL</span>
        <span>{allProductsPrice}</span>
        <span>Shipping and taxes computed at checkout</span>
      </div>
      <div className={styles.checkoutArea}>
        <button onClick={handleCheckoutButton}>CHECKOUT</button>
        <Link to={"/shop"}>KEEP SHOPING</Link>
      </div>
    </div>
  );
};
export default PaymentSection;
