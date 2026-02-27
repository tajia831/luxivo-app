import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

export function Blog_st_hero() {
  return (
    <div className="container-fluid room-hero" style={{backgroundImage: `url(assets/room-grid/page-bg.webp)`}}>
      <div className="hero-content">
        <h1>Blog</h1>
        <div className="breadcrumb">
          <span className='sp-link'><Link to="/">luxivo</Link></span> <span><RiArrowRightSLine/></span> <span className='room-p'> Blog</span>
        </div>
      </div>
    </div>
  )
}

