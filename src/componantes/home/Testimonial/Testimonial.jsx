import React from 'react'
import './Testimonial.css'
import { Testi_slider } from './Testi_slider'

export function Testimonial() {
  return (
    <>
    <div className="container testimonial">
    <div className="discover-text">
        <div className="testimonial-title">
          <span data-aos="fade-up" data-aos-duration="800">
            <img src={"/assets/d-line.webp"} alt="" />
          </span>
          <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Testimonial</span>
          <h2 data-aos="fade-up" data-aos-duration="1200">Check Our Latest Feedback</h2>
        </div>
      </div>
      <Testi_slider/>
      </div>
      </>
  )
}

