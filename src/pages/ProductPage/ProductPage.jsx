import { useState } from "react";
import { useParams, useOutletContext } from "react-router";
import BreadCrumbNav from "./components/BreadCrumbNav/BreadCrumbNav.jsx";
import ProductImages from "./components/ProductImages/ProductImages.jsx";
import ProductInfos from "./components/ProductInfos/ProductInfos.jsx";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { products, setCartItems } = useOutletContext();
  const { category, title } = useParams();
  const filteredProduct = getProductByTitle(products, title);
  const [productQuantity, setProductQuantity] = useState(1);
  const [showAddedToCard, setShowAddedToCard] = useState(0);

  const handleAddToCart = (stock) => {
    // if (productQuantity > stock) return;

    console.log(stock);
    if (productQuantity <= 0) return;
    setShowAddedToCard((prev) => prev + 1);
    setCartItems((prev) => [
      ...prev,
      ...Array(productQuantity).fill(filteredProduct).flat(),
    ]);
  };

  // console.log(filteredProduct);

  return (
    <div className={styles.container}>
      <BreadCrumbNav category={category} title={title} />

      <div className={styles.productContainer}>
        {filteredProduct.map((product) => {
          return (
            <>
              <ProductImages product={product} />
              <ProductInfos
                product={product}
                productQuantity={productQuantity}
                setProductQuantity={setProductQuantity}
                showAddedToCard={showAddedToCard}
                handleAddToCart={handleAddToCart}
              />
            </>

            //   ==> show // tags / warranty reviews */ minimumOrderQuantity, */ stock */
            // product page keys
          );
        })}
      </div>
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
