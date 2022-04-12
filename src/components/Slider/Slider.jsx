// Import Swiper React components
import React from 'react';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.scss';
// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';

export default function Slider({
  _slides = 1,
  _effect,
  callback = () => {},
  _pagination = false,
}) {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        spaceBetween={20}
        effect={_effect === undefined ? '' : _effect}
        slidesPerView={_slides}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        pagination={false}
        navigation={_pagination}
        className="mySwiper"
      >
        {callback()}
      </Swiper>
    </>
  );
}
