import React from "react";
import About_cr_comfor from "./About_cr_comfor";


export function About_comfor() {
  return (
    <div className="container-fluid room-Comfor">
      <div className="discover-text">
        <div className="Luxury-Comfor-title">
          <span data-aos="fade-up" data-aos-duration="800">
            <img src={"/assets/d-line.webp"} alt="" />
          </span>
          <span
            className="rsub-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            LUXURY COMFORT
          </span>
          <h2 className="ro-com-h2" data-aos="fade-up" data-aos-duration="1200">
            Featured Rooms & Suits
          </h2>
        </div>
      </div>
      <About_cr_comfor/>
    </div>
  );
}
