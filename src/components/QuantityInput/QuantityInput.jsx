import styles from "./QuantityInput.module.css";

// increases and decreases product quantity :
const QuantityInput = ({ quantity, setQuantity, stock }) => {
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const inputValue = Number(value);
    setQuantity(inputValue);
  };

  const preventDecimals = (e) => {
    if (e.key === "." || e.key == ",") e.preventDefault();
  };

  return (
    <>
      <span>QUANTITY:</span>
      <div className={styles.quantityContainer}>
        <button className={styles.decrease} onClick={decrease}>
          -
        </button>
        <input
          type="number"
          min={1}
          max={stock}
          value={quantity}
          placeholder="how many items?"
          onKeyDown={(e) => preventDecimals(e)}
          onChange={(e) => handleChange(e)}
        />
        <button className={styles.increase} onClick={increase}>
          +
        </button>
      </div>
    </>
  );
};

export default QuantityInput;
