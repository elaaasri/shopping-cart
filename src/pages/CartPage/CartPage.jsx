import { useOutletContext, Link } from "react-router";
import PaymentSection from "../../components/PaymentSection";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { organizedProducts, setCartItems } = useOutletContext();
  const handleRemoveButton = (productTitle) => {
    setCartItems((prev) => prev.filter((item) => item.title !== productTitle));
  };

  const test = Object.entries(organizedProducts).length;
  console.log(test);

  if (test <= 0) {
    return (
      <div className={styles.emptyCart}>
        <h3>YOUR CART IS LOOKING EMPTY</h3>
        <Link to="/shop">SHOP NOW</Link>
      </div>
    );
  }

  return (
    <div className={styles.cartPageCotainer}>
      <h2 className={styles.title}>YOUR CART</h2>
      <table className={styles.cartTable}>
        <thead className={styles.tableHead}>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        {Object.entries(organizedProducts).map(
          ([title, productsArr], index) => {
            const { images, price } = productsArr[0];
            const productTotalPrice = +(price * productsArr.length).toFixed(2);

            return (
              <tbody key={index}>
                <tr className={styles.tableRow}>
                  <td className={styles.productCell}>
                    <img src={images[0]} />
                    <span>{title}</span>
                  </td>
                  <td>
                    <div>{price}</div>
                  </td>
                  <td>{productsArr.length}</td>
                  <td>{productTotalPrice}</td>
                  <td>
                    <button
                      className={styles.buttonCell}
                      onClick={() => handleRemoveButton(title)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          },
        )}
      </table>
      <PaymentSection organizedProducts={organizedProducts} />
    </div>
  );
};
export default CartPage;
