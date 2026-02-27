import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./Header.css";

export function Header() {
  return (
    <div className="container-fluid px-0">
      <div
        className="headers"
        style={{ backgroundImage: `url(assets/hback.jpg)` }}
      >
        <div className="head-right" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="20">
          <img src={"/assets/hederR.webp"} alt="" />
        </div>
        <div className="head-left" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="10">
          <img src={"/assets/hraderL.webp"} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-lg-start hero-text">
              <h1  data-aos="fade-left" data-aos-duration="2500">
                Our Luxury <br /> Resort & Hotel
              </h1>
            </div>

            <div className="col-lg-6 hero-pbtn"  data-aos="fade-up" data-aos-duration="2600">
              <p>
                Immerse yourself in luxury and freshness with stunning ocean
                views and <br /> beach just a few steps away. Enjoy the sweet
                breath of the sea with elegant <br /> and luxurious rooms,
                opposite the beach voted by Forbes magazine
              </p>
              <a className="explore-btn" href="#">
                explore rooms{" "}
                <span>
                  <GoArrowRight />
                </span>
              </a>
            </div>
          </div>

          <div className="avatar-text-box"  data-aos="fade-up" data-aos-duration="2000">
            <h6>Beautiful Destinations</h6>
            <div className="avarat-list">
              <ul>
                <li>
                  <img src={"/assets/avatar-img3.webp"} alt="" />
                </li>
                <li className="item1">
                  <img src={"/assets/avatar-img2.webp"} alt="" />
                </li>
                <li className="item1">
                  <img src={"/assets/avatar-img1.webp"} alt="" />
                </li>
                <li className="item1">
                  <span>10+</span>
                </li>
              </ul>
              <div className="avarat-text">
                100k+ users have visited our platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
