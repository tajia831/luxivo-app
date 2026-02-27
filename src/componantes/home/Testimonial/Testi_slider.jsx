import React from 'react'
import data from '../data.json'
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


export function Testi_slider() {
    const {testimonials} = data;
  return (
    <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((item, k) =>(
            <SwiperSlide key={k}>
            <div className="testmonial-item" data-aos="fade-up" data-aos-duration="1000">
                <div className="test-rating-quote">
                    <div className="quote"><span><FaQuoteLeft/></span></div>
                <div className="test-ratings">
                    <span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span>
                </div>
                </div>
                <p className='test-para'>"{item.text}"</p>
                <div className="author-thumb">
                    <div className="author-img">
                        <img src={item.authorImage} alt="" />
                    </div>
                    <div className="author-info">
                        <h5>{item.authorName}</h5>
                        <span className='author-posirion'>{item.authorPosition}</span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
  )
}

