import React from "react";
import "./About_o_hotel.css";
import { About_text_part } from "./About_text_part";

export function About_o_hotel() {
  return (
    <div className="container-fluid luxivo-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="luxivo-img-box">
              <div className="img-top"  data-aos="fade-up" data-aos-duration="800">
                <img src={"/assets/about-img1.webp"} alt="" />
              </div>
              <div className="img-two"  data-aos="fade-up" data-aos-duration="1000">
                <img src={"/assets/about-img2.webp"} alt="" />
              </div>
              <div className="customar"  data-aos="fade-up" data-aos-duration="1000">
                <h3>8k+</h3>
                <p>Happy customer</p>
              </div>
              <div className="experience" data-aos="fade-down" data-aos-duration="1000">
                <h3>30+</h3>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <About_text_part />
          </div>
        </div>
      </div>
    </div>
  );
}
