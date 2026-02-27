import React from 'react'
import './Special_Offer.css'
import { FaArrowRight } from "react-icons/fa";
import { Special_1card } from './Special_1card';
import { Special_2card } from './Special_2card';
import { Special_3card } from './Special_3card';

export function Special_Offer() {
  return (
    <div className="container special-div">
        <div className="special-title row">
            <div className="col-lg-8 col-md-12">
                <div className="room-section-title">
              <span data-aos="fade-up" data-aos-duration="800">
                <img src={"/assets/d-line.webp"} alt="" />
              </span>
              <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Special Offer</span>
              <h2 data-aos="fade-up" data-aos-duration="1200">Best Offers At our Hotel</h2>
            </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="special-title-btn" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#">view all offers <span><FaArrowRight/></span></a>
                </div>
            </div>
        </div>
        <Special_1card/>
        <Special_2card/>
        <Special_3card/>
    </div>
  )
}

