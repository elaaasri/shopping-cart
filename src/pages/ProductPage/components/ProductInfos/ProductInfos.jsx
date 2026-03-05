import styles from "./ProductInfos.module.css";
import QuantityInput from "../../../../components/QuantityInput/QuantityInput.jsx";

const ProductInfos = ({
  product,
  productQuantity,
  setProductQuantity,
  showAddedToCard,
  handleAddToCart,
}) => {
  const { title, price, discountPercentage, description, stock } = product;

  return (
    <div className={styles.infosContainer}>
      <div className={styles.titleArea}>
        <span className={styles.title} data-testid="product-title">
          {title.toUpperCase()}
        </span>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}$</span>
          <span className={styles.discount}>
            {((price / (100 - discountPercentage)) * 100).toFixed(2)}$
          </span>
        </div>
      </div>
      <hr />
      <span className={styles.description}>{description}</span>
      <div className={styles.quantity}>
        <QuantityInput
          quantity={productQuantity}
          setQuantity={setProductQuantity}
          stock={stock}
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
        Added To Cart!
      </div>
    </div>
  );
};
export default ProductInfos;
