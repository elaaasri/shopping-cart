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
  const filteredProduct = products.find((p) => p.title === title);

  const checkProductStock = (stock, title) => {
    const currentProductQuantity = organizedProducts[title]?.length || 0;
    const allProductQuantity = currentProductQuantity + productQuantity;
    return stock >= allProductQuantity;
  };

  const handleAddToCart = (stock, title) => {
    // prevents if stock is not available!
    const isProductStockAvailable = checkProductStock(stock, title);
    if (!isProductStockAvailable) {
      alert("Product Out of Stock!");
      return;
    }

    //  prevents if quantity is 0!
    if (productQuantity <= 0) return;

    setShowAddedToCard((prev) => prev + 1);
    setCartItems((prev) => [
      ...prev,
      ...Array(productQuantity).fill(filteredProduct),
    ]);
  };

  return (
    <div className={styles.container}>
      <BreadCrumbNav category={category} title={title} />
      <div className={styles.productContainer}>
        {filteredProduct && (
          <>
            <ProductImages product={filteredProduct} />
            <ProductInfos
              product={filteredProduct}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
              showAddedToCard={showAddedToCard}
              handleAddToCart={handleAddToCart}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

//
// fix stock done
// fix checkProductStock and show msg done
// quntity button wont include decimals  done
//   ==> show // tags / warranty reviews */ minimumOrderQuantity, */ stock */
// product page key error!
// go to cart button
// cart page link !
// clean products outlet and getCategoryByName from CategoryPage and add discount to the product
