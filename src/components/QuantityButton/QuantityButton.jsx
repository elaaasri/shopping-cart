import styles from "./QuantityButton.module.css";

// increases and decreases product quantity :
const QuantityButton = ({ quantity, setQuantity }) => {
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

  return (
    <>
      <span>QUANTITY:</span>
      <div className={styles.container}>
        <button className={styles.decrease} onClick={decrease}>
          -
        </button>
        <input
          type="number"
          min={1}
          max={100}
          value={quantity}
          placeholder="how many items?"
          onChange={(e) => handleChange(e)}
        />
        <button className={styles.increase} onClick={increase}>
          +
        </button>
      </div>
    </>
  );
};

export default QuantityButton;
