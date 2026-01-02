import { useState } from "react";
import { useParams, useOutletContext } from "react-router";
import QuantityButton from "../../components/QuantityButton";
import styles from "./ProductPage.module.css";
import { Link } from "react-router";
import { useLocation } from "react-router";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const ProductPage = () => {
  const { products, setCartItems } = useOutletContext();
  const { category, title } = useParams();
  const filteredProduct = getProductByTitle(products, title);
  const [productQuantity, setProductQuantity] = useState(1);
  // const location = useLocation();

  // const navPaths = location.pathname
  //   .split("/")
  //   .filter(Boolean)
  //   .map(decodeURIComponent);
  // .map((path, index) => (index == 2 ? decodeURIComponent(path) : path));

  const handleAddToCart = () => {
    if (productQuantity <= 0) return;
    setCartItems((prev) => [
      ...prev,
      ...Array(productQuantity).fill(filteredProduct).flat(),
    ]);
  };
  console.log(filteredProduct);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to={"/shop"}>SHOP</Link>
        &nbsp; / &nbsp;
        <Link to={`/shop/${category}`}>{category.toUpperCase()}</Link>
        &nbsp; / &nbsp;
        <Link>{title.toUpperCase()}</Link>
      </nav>
      <div className={styles.productContainer}>
        {filteredProduct.map(({ title, price, description, images, id }) => {
          const imgsLength = images.length;

          return (
            <>
              <div className={styles.imgWrapper}>
                {imgsLength === 1 ? (
                  <img
                    className={styles.img}
                    src={images[0]}
                    alt={title + " product image"}
                  />
                ) : (
                  <ImageSlider images={images} title={title} />
                )}
              </div>

              <div className={styles.productInfos}>B</div>
            </>

            // classname
            // <div key={id}>
            //   {imgsLength === 1 ? (
            //     <img
            //       className={styles.img}
            //       src={images[0]}
            //       alt={title + " product image"}
            //     />
            //   ) : (
            //     <ImageSlider images={images} title={title} />
            //   )}
            //   <QuantityButton
            //     quantity={productQuantity}
            //     setQuantity={setProductQuantity}
            //   />
            //   <button onClick={handleAddToCart}>Add to Cart</button>
            //   <div>{title}</div>
            //   <div>{price}</div>
            //   <div>{description}</div>
            //   <h2>image length : {images.length}</h2>
            // </div>
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

{
  /* <div className="products-area">
  {filteredCategoryProducts.map((categoryProduct) => {
    const {
      availabilityStatus,
      discountPercentage,
      title,
      price,
      id,
      rating,
      images,
    } = categoryProduct;
    return (
      <Link className="product-card" to={`/shop/${category}/${title}`} key={id}>
        <div className="product-img-area">
          <div>{availabilityStatus}</div>
          <img src={images[0]} alt={title + " image"} />
        </div>
        <div className="product-infos-area">
          <div>{title.toUpperCase()}</div>
          <div>{price}$</div>
          <div>{((price / (100 - discountPercentage)) * 100).toFixed(2)}$</div>
          {/* <div>Rating: {rating}</div> */
}
// </div>
{
  /* reviews */
}
{
  /* minimumOrderQuantity, */
}
{
  /* stock */
}
// </Link>
