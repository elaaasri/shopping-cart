import { useParams, useOutletContext } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Zoom, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/autoplay";

const ProductPage = () => {
  const { products } = useOutletContext();
  const { title } = useParams();
  const filteredProduct = getProductByTitle(products, title);

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

// display product images with a slider using swiper library :
const ImageSlider = ({ images, title }) => {
  return (
    <Swiper
      className="images-slider-container"
      slidesPerView={1}
      modules={[Navigation, Pagination, Zoom, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      zoom={true}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
    >
      {images.map((image) => (
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image} alt={title + " product image"} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
