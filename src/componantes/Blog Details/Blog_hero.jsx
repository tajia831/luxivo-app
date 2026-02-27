import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

export function Blog_hero() {
  return (
    <div className="container-fluid room-hero" style={{backgroundImage: `url(assets/room-grid/page-bg.webp)`}}>
      <div className="hero-content">
        <h1 className='text-center'>Start resources appropriately <br/> using line metrics.</h1>
        <div className="breadcrumb">
          <span className='sp-link'><Link to="/">luxivo</Link></span> <span><RiArrowRightSLine/></span> <span className='sp-link'><Link to="/Blog_standard">Blog</Link></span> <span><RiArrowRightSLine/></span> <span className='sp-link'><Link to="/Service_details">City Guide</Link></span> <span><RiArrowRightSLine/></span> <span className='room-p'>Start resources appropriately using line metrics.</span>
        </div>
      </div>
    </div>
  )
}

