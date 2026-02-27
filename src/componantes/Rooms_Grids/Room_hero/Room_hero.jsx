import React from 'react'
import { Link } from "react-router-dom";
import './Room_hero.css'
import { RiArrowRightSLine } from "react-icons/ri";

export function Room_hero() {
  return (
    <div className="container-fluid room-hero" style={{backgroundImage: `url(assets/room-grid/page-bg.webp)`}}>
      <div className="hero-content">
        <h1>Rooms Grid</h1>
        <div className="breadcrumb">
          <span className='sp-link'><Link to="/">luxivo</Link></span> <span><RiArrowRightSLine/></span> <span className='room-p'> Rooms Grid</span>
        </div>
      </div>
    </div>
  )
}

