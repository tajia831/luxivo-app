import React from "react";
import "./Hotel_Facilities.css";

import { Hotel_text_Fac } from "./Hotel_text_Fac";

export function Hotel_Facilities() {
  return (
    <div className="container facilities">
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <div className="hotel-img-box">
            <div className="hotel-images" data-aos="fade-up" data-aos-duration="800">
              <img src={"/assets/fac-img1.webp"} alt="" />
              <div className="shape">
                <img src={"/assets/f-shape.webp"} alt="" />
              </div>
            </div>
            <div className="hotel-img-two"  data-aos="fade-up" data-aos-duration="1000">
              <img src={"/assets/fac-img2.webp"} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12">
          <Hotel_text_Fac/>
        </div>
      </div>
    </div>
  );
}
