import React from "react";
import "./Discover_our.css";
import { Discover_slider } from "./Discover_slider";

export function Discover_our() {
  return (
    <div
      className="container-fluid Discover"
      style={{ backgroundImage: `url(assets/feature-bg.webp)` }}
    >
    
      <div className="discover-text">
        <div className="discover-section-title">
          <span  data-aos="fade-up" data-aos-duration="800">
            <img src={"/assets/d-line-wt.webp"} alt="" />
          </span>
          <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Discover our All</span>
          <h2 data-aos="fade-up" data-aos-duration="1200">Featured Amenities</h2>
        </div>
      </div>
      <div><Discover_slider/></div>
    </div>
  );
}
