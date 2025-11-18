import { useState } from "react";
import { useParams, useOutletContext } from "react-router";
import QuantityButton from "../components/QuantityButton";
import ImageSlider from "../components/ImageSlider";

const ProductPage = () => {
  const { products, setCartItems } = useOutletContext();
  const { title } = useParams();
  const filteredProduct = getProductByTitle(products, title);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddToCart = () => {
    if (productQuantity <= 0) return;
    setCartItems((prev) => [
      ...prev,
      ...Array(productQuantity).fill(filteredProduct).flat(),
    ]);
  };

  return (
    <div className="product-container">
      {filteredProduct.map(({ title, price, description, images, id }) => {
        const imgsLength = images.length;
        return (
          <div className="product" key={id}>
            {imgsLength === 1 ? (
              <img src={images[0]} alt={title + " product image"} />
            ) : (
              <ImageSlider images={images} title={title} />
            )}
            <QuantityButton
              quantity={productQuantity}
              setQuantity={setProductQuantity}
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
            <div>{title}</div>
            <div>{price}</div>
            <div>{description}</div>
            <h2>image length : {images.length}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default ProductPage;

// fitlers products by category name :
const getProductByTitle = (products, productTitle) => {
  return products.filter(({ title }) => {
    return title === productTitle;
  });
};
