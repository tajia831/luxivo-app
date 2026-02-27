import { FaPlus } from "react-icons/fa";
import data from '../about_data.json'
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export function About_slider() {
  const { about_slid } = data;
  return (
    <div
      className="container-fluid about-slider"
      data-aos="fade-up"
      data-aos-duration="2200"
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {about_slid.map((item, k) => (
          <SwiperSlide key={k}>
            <div className="about-thim">
              <img className="about_slid_img" src={item.image} alt="" />
              <div className="ab-hover-content">
                <span>
                  <FaPlus />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
