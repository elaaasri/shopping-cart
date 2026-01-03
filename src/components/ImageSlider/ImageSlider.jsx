import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./ImageSlider.module.css";

// display product images with a slider using swiper library :
const ImageSlider = ({ images, title }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={styles.imgWrapper}>
            <img src={image} alt={title + " product image"} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ImageSlider;
