import styles from "./ProductInfos.module.css";
import QuantityButton from "../../../../components/QuantityButton/QuantityButton";
import { useState } from "react";

const ProductInfos = ({
  product,
  productQuantity,
  setProductQuantity,
  showAddedToCard,
  handleAddToCart,
}) => {
  const { title, price, discountPercentage, description, stock } = product;
  const [zbe, getZbe] = useState(false);
  //   console.log(product);
  //   console.log(id);

  return (
    <div className={styles.productInfos}>
      <div className={styles.titleArea}>
        <span className={styles.title}>{title.toUpperCase()}</span>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}$</span>
          <span className={styles.discount}>
            {((price / (100 - discountPercentage)) * 100).toFixed(2)}$
          </span>
        </div>
      </div>
      <hr />
      <span className={styles.description}>{description}</span>
      <span>{stock}</span>
      <div className={styles.quantity}>
        <QuantityButton
          quantity={productQuantity}
          setQuantity={setProductQuantity}
        />
      </div>
      <button
        className={styles.button}
        onClick={() => handleAddToCart(stock, title)}
      >
        Add to Cart
      </button>
      <div
        key={showAddedToCard}
        className={`${styles.feedBackButton} ${
          showAddedToCard ? styles.slideIn : ""
        }`}
      >
        Added To Card!
      </div>
      <span className={styles.test}>
        We do not have enough stocks for your current order. Contact us directly
        to get more information
      </span>
    </div>
  );
};
export default ProductInfos;
