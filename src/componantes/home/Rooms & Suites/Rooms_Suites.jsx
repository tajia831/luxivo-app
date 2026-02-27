import React from "react";
import "./Rooms_Suites.css";
import { Room_slider } from "./Room_slider";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export function Rooms_Suites() {
  return (
    <div className="container-fluid room-suites">
      <div
        className="room-bg-img"
        style={{ backgroundImage: `url(assets/room-bg.webp)` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="room-section-title">
              <span data-aos="fade-up" data-aos-duration="800">
                <img src={"/assets/d-line.webp"} alt="" />
              </span>
              <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Rooms & Suites</span>
              <h2 data-aos="fade-up" data-aos-duration="1200">Rest in Comfort Select From Our Suites & Rooms</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 room-arrows">
            <div className="arrow-btn">
              <div className="swiper-button-prev arrow"><span><FaArrowRight/></span></div>
            <div className="swiper-button-next arrow"><span><FaArrowLeft/></span></div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <Room_slider />
        </div>
    </div>
  );
}
