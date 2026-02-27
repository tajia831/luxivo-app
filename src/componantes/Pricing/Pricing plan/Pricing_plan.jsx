import React from 'react'
import './Pricing_plan.css'
import { Pricing_cards } from './Pricing_cards'

export function Pricing_plan() {
  return (
    <div className="container">
        <div className="Pricing-plan">
            <div className="discover-text">
        <div className="Luxury-Comfor-title">
          <span  data-aos="fade-up" data-aos-duration="800">
            <img src={"/assets/d-line.webp"} alt="" />
          </span>
          <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Pricing plan</span>
          <h2 className="ro-com-h2" data-aos="fade-up" data-aos-duration="1200">Choose Your Perfect Stay</h2>
        </div>
      </div>
        </div>
        <Pricing_cards/>
    </div>
  )
}

