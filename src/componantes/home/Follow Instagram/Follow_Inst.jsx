import React from "react";
import "./Follow_Inst.css";
import data from '../data.json'
import { IoLogoInstagram } from "react-icons/io";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export function Follow_Inst() {
    const {galleryData} = data;
  return (
    <div className="container-fluid follow-div">
      <div className="follow-text container" data-aos="fade-up" data-aos-duration="800">
        <h5>Follow Instagram</h5>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        className="mySwiper">
        {galleryData.map((item, k) =>(
            <SwiperSlide key={k}>
          <div className="gallery-item" data-aos="fade-up" data-aos-duration="1000">
              <img className="thumbnail" src={item.image} alt="" />
            <div className="hover-content">
              <span>
                <IoLogoInstagram />
              </span>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
