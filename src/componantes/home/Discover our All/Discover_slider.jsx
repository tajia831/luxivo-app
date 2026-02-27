import React from "react";
import data from '../data.json'

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export function Discover_slider() {
  const {swiper2}= data;
  return (
    <>
      <div className="Discover-slick">
        <div className="Discover-rtack">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-2",
              prevEl: ".swiper-button-prev-2",
              Clickable: true,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {swiper2.map((item, k) =>(
              <SwiperSlide key={k}>
              <div className="discover-slide-item" data-aos="fade-up" data-aos-duration="1000">
                <div className="dis-icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="dis-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a className="dis-book-btn" href="#">
                    {item.button.text}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>

          <div className="disco-slid-btn" data-aos="fade-up" data-aos-duration="1200">
            <div className="swiper-button-prev-2 dis-btn">
              <span>
                <FaArrowLeft />
              </span>
            </div>
            <div className="swiper-button-next-2 dis-btn">
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
