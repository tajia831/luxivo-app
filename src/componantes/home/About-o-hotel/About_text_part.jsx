import React from 'react'
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";

export function About_text_part() {
  return (
    <div className="contant-box">
      <div className="section-title">
        <span data-aos="fade-up" data-aos-duration="800"><img src={"/assets/d-line.webp"} alt="" /></span>
        <span className='sub-title' data-aos="fade-up" data-aos-duration="1000">About our hotel</span>
        <h2 data-aos="fade-up" data-aos-duration="1200">Stay in a luxurious resort anywhere in the world.</h2>
      </div>
      <p>Luxivo Hotels Resort is more than just a luxury resort; it is a tranquil oasis in paradise. With its stunning location, luxurious accommodations, And exceptional dining options, it offers guests</p>
      <div className="row">
        <div className="col-md-6">
          <div className="icon-left-box" data-aos="fade-up" data-aos-duration="1000">
            <img src={"/assets/icon1.webp"} alt="" />
            <h5>The Best Lighting</h5>
          </div>
        </div>
        <div className="col-md-6">
          <div className="icon-right-box" data-aos="fade-up" data-aos-duration="1000">
            <img src={"/assets/icon2.webp"} alt="" />
            <h5>The Best Swimming</h5>
          </div>
        </div>
      </div>
      <div className="check-list">
        <ul className='ps-0' data-aos="fade-up" data-aos-duration="1400">
          <li><span><HiMiniCheckBadge/></span>Prime locations with stunning views</li>
          <li><span><HiMiniCheckBadge/></span>Handpicked room designs for modern living</li>
        </ul>
      </div>
      <div className="button-wrap" data-aos="fade-up" data-aos-duration="1600">
        <div className="discover-btn">
          <a href="#">DISCOVER MORE <span><GoArrowRight/></span></a>
        </div>
        <div className="thumb-item">
          <img src={"/assets/author-img1.webp"} alt="" />
          <div className="author-info">
            <img src={"/assets/sign.webp"} alt="" />
            <h5>Brooklyn Simmons</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

