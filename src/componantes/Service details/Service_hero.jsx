import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

export function Service_hero() {
  return (
    <div className="container-fluid room-hero" style={{backgroundImage: `url(assets/room-grid/page-bg.webp)`}}>
      <div className="hero-content">
        <h1>Gym Training Grounds</h1>
        <div className="breadcrumb">
          <span className='sp-link'><Link to="/">luxivo</Link></span> <span><RiArrowRightSLine/></span> <span className='sp-link'><Link to="/Our_Services">Service</Link></span> <span><RiArrowRightSLine/></span> <span className='room-p'> Gym Training Grounds</span>
        </div>
      </div>
    </div>
  )
}

