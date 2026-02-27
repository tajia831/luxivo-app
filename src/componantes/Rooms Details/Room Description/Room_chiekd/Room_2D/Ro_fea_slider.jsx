import React from 'react'
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export function Ro_fea_slider() {
  return (
    <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider1.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider2.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider1.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider2.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider1.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider2.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider1.webp"} alt="" /></SwiperSlide>
        <SwiperSlide><img className='fea_slid_img' src={"/assets/Rooms-Details/slider2.webp"} alt="" /></SwiperSlide>
      </Swiper>
  )
}

