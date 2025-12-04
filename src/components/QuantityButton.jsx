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
    <div>
      <input
        type="number"
        value={quantity}
        placeholder="how many items?"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default QuantityButton;
