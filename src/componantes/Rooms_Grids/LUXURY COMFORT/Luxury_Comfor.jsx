import React from 'react'
import './Luxury_Comfor.css'
import { Lux_C_nav } from './Lux_nav/Lux_C_nav'

export function Luxury_Comfor() {
  return (
    <div className="container-fluid room-Comfor">
        <div className="discover-text">
        <div className="Luxury-Comfor-title">
          <span  data-aos="fade-up" data-aos-duration="800">
            <img src={"/assets/d-line.webp"} alt="" />
          </span>
          <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">LUXURY COMFORT</span>
          <h2 className="ro-com-h2" data-aos="fade-up" data-aos-duration="1200">Featured Rooms & Suits</h2>
        </div>
      </div>
      <Lux_C_nav/>
    </div>
  )
}

