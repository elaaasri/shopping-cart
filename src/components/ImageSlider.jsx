import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/autoplay";

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
export default ImageSlider;
