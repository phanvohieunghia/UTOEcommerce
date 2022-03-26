// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.scss";
// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

export default function App(data) {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        spaceBetween={30}
        effect={"fade"}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        scrollbar={{ draggable: true }}
        pagination={false}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/Ecommerce/slider/banner 1.jpg" alt="error png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Ecommerce/slider/banner 2.jpg" alt="error png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Ecommerce/slider/banner 3.jpg" alt="error png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
