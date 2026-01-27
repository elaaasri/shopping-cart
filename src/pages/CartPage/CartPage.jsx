import { useOutletContext } from "react-router";
import PaymentSection from "../../components/PaymentSection";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { organizedProducts, setCartItems } = useOutletContext();
  const handleRemoveButton = (productTitle) => {
    setCartItems((prev) => prev.filter((item) => item.title !== productTitle));
  };

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

// fix stock done
// fix checkProductStock and show msg done
// quntity button wont include decimals done
// product reviews component done
// product page key done
// go to cart button done
// fix footer table css! done
// add cart page and its module css // add default for 0 products
// add payment section page and its module css
// clean products outlet and getCategoryByName from CategoryPage and add discount to the product
// cart page link !
// add with to header on scrolling!
// fix css containers names!

// returnPolicy
// shippingInformation
// warrantyInformation

// return (
//   <div className="cart-container">
//     {organizedProductsArr.length}
//     <h1>YOUR CART</h1>
//     {organizedProductsArr.map(([title, productsArr], index) => {
//       const { images, price } = productsArr[0];
//       const productTotalPrice = +(price * productsArr.length).toFixed(2);

//       return (
//         <div key={index} className="cart-product">
//           <img src={images[0]} style={{ width: "50px" }} />
//           <div>title: {title}</div>
//           <div>price: {price}</div>
//           <div>quantity: {productsArr.length}</div>
//           <div>total: {productTotalPrice}</div>
//           <button onClick={() => handleRemoveButton(title)}>remove</button>
//         </div>
//       );
//     })}
//     <PaymentSection organizedProductsArr={organizedProductsArr} />;
//   </div>
// );
