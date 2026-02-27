import data from '../data.json'
//icon
import { FaStar } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

// swiper links
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";


export function Room_slider() {
  const {swipers}= data;
  return (
    <>
      <div className="room-sliders">
          <div className="slick-list">
            <Swiper
              slidesPerView={5}
              spaceBetween={200}
              centeredSlides={true}
              speed={1000}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {swipers.map((item, k) =>(
                <SwiperSlide key={k}>
                <div className="room-item"  data-aos="fade-up" data-aos-duration="1000">
                  <div className="room-img">
                    <img src={item.image} alt="" />
                   <div className="rate"><span><FaStar/></span>{item.rating}</div>
                  </div>
                  <div className="room-content">
                    <a href="#">{item.title}</a>
                    <p>{item.description}</p>
                    <div className="room-meta">
                      <p><span><FaExpandArrowsAlt/></span> {item.meta.size}</p>
                      <p><span><IoBedOutline/></span> {item.meta.beds}</p>
                      <p><span><LuBath/></span> {item.meta.bathrooms}</p>
                    </div>
                    <div className="room-bottom">
                      <div className="price">${item.price} <span>{item.price_unit}</span></div>
                      <div className="rom-view">
                        <a href="#">{item.details_text} <span><FaArrowRight/></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>
    </>
  );
}
