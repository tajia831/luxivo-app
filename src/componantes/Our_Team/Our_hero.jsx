import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

export function Our_hero() {
  return (
    <div className="container-fluid room-hero" style={{backgroundImage: `url(assets/room-grid/page-bg.webp)`}}>
      <div className="hero-content">
        <h1>Our Team</h1>
        <div className="breadcrumb">
          <span className='sp-link'><Link to="/">luxivo</Link></span> <span><RiArrowRightSLine/></span> <span className='room-p'> Our Team</span>
        </div>
      </div>
    </div>
  )
}

