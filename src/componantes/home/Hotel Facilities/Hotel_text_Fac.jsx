import React from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";

export function Hotel_text_Fac() {
  return (
    <div className="hotel-content-box mt-5 mt-lg-0">
      <div className="hotel-section-title">
        <span  data-aos="fade-up" data-aos-duration="800">
          <img src={"/assets/d-line.webp"} alt="" />
        </span>
        <span className="rsub-title"  data-aos="fade-up" data-aos-duration="1000">Hotel Facilities</span>
        <h2 data-aos="fade-up" data-aos-duration="1200">Everything You Need for a Relaxed and Comfortable.</h2>
      </div>
      <p data-aos="fade-up" data-aos-duration="1400">
        Your safety and well-being are our highest priorities. We follow strict
        cleaning protocols, <br /> enhanced security measures, and
        round-the-clock monitoring to ensure you enjoy complete <br /> peace of
        mind throughout your stay with us.
      </p>
      <div className="hotel-icon-box">
        <div className="row">
          <div className="col-md-6 right-botder">
            <div className="h-left-box" data-aos="fade-up" data-aos-duration="1600">
              <div className="icon">
                <img src={"/assets/icon3.webp"} alt="" />
              </div>
              <h4>Gym Training Center</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-right-box" data-aos="fade-up" data-aos-duration="1600">
              <div className="icon">
                <img src={"/assets/icon4.webp"} alt="" />
              </div>
              <h4>Restaurant & Bar</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="check-list">
        <ul className="ps-0" data-aos="fade-up" data-aos-duration="2000">
          <li>
            <span>
              <HiMiniCheckBadge />
            </span>
            Prime locations with stunning views
          </li>
          <li>
            <span>
              <HiMiniCheckBadge />
            </span>
            Handpicked room designs for modern living
          </li>
          <li>
            <span>
              <HiMiniCheckBadge />
            </span>
            Handpicked room designs for modern living
          </li>
        </ul>
      </div>
    </div>
  );
}
