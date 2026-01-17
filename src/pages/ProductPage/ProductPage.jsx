import { useState } from "react";
import { useParams, useOutletContext } from "react-router";
import BreadCrumbNav from "./components/BreadCrumbNav/BreadCrumbNav.jsx";
import ProductImages from "./components/ProductImages/ProductImages.jsx";
import ProductInfos from "./components/ProductInfos/ProductInfos.jsx";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { products, setCartItems, organizedProducts } = useOutletContext();
  const { category, title } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const [showAddedToCard, setShowAddedToCard] = useState(0);
  const filteredProduct = products.filter((p) => p.title === title);

  const checkProductStock = (stock) => {
    // const currentProductQuantity = cartItems.filter(
    //   (p) => p.title === title,
    // ).length;

    const currentProductQuantity = Object.keys(organizedProducts).length;

    // if (currentProductQuantity + productQuantity > stock) {
    //   alert("Product Out of Stock!");
    //   return;
    // }
    const allProductQuantity = currentProductQuantity + productQuantity;
    return stock > allProductQuantity;
  };

  const handleAddToCart = (stock, title) => {
    const isProductStockAvailable = checkProductStock(stock);

    console.log(isProductStockAvailable);

    if (!isProductStockAvailable) {
      alert("Product Out of Stock!");
      return;
    }

    // const currentProductQuantity = cartItems.filter(
    //   (p) => p.title === title,
    // ).length;
    // if (currentProductQuantity + productQuantity > stock) {
    //   alert("Product Out of Stock!");
    //   return;
    // }

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
            // fix stock done
            // quntity button wont include decimals  !!!
            // show msg !!!
            //   ==> show // tags / warranty reviews */ minimumOrderQuantity, */ stock */
            // product page keys
            // go to cart button
            // cart page link !
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
