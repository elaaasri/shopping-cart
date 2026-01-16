import styles from "./ProductImages.module.css";
import ImageSlider from "../../../../components/ImageSlider/ImageSlider";

const ProductImages = ({ product }) => {
  const { images, title } = product;
  const imgsLength = images.length;

  return (
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
  );
};
export default ProductImages;
