import React from 'react'
import './Service_Facilities.css'
import data from '../ourdata.json'

export function Service_Facilities() {
  const {services} =data;
  return (
    <div className="container-fluid services-2">
      <div className="discover-text">
        <div className="testimonial-title">
          <span data-aos="fade-up" data-aos-duration="800">
            <img src={"/assets/d-line.webp"} alt="" />
          </span>
          <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Hotel Facilities</span>
          <h2 data-aos="fade-up" data-aos-duration="1200">Comfort and Convenience <br/> You’ll Love</h2>
        </div>
      </div>
      <div className="row" data-aos="fade-up" data-aos-duration="1000">
        {services.map((item, k) =>(
          <div className="col-lg-2 col-md-4 col-sm-6" key={k}>
          <div className="service-iconic">
            <img className='service-img' src={item.image} alt="" />
            <div className="ser-con">
              <span className='line'></span>
              <h5>{item.title}</h5>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

