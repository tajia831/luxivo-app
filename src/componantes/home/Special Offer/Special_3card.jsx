import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export function Special_3card() {
  return (
    <div className="spec-card-item" data-aos="fade-up" data-aos-duration="1000">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="left-contant">
                        <div className="shape-img">
                            <img src={"/assets/off-shape.webp"} alt="" />
                        </div>
                        <h3 className='left-title'>
                            <a href="#">25% Meeting room – make a date to catch up & enjoy</a>
                        </h3>
                        <div className="ratings">
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <p className='ratings-point'>4.9 Reviews</p>
                        </div>
                        <p className='left-para'>Save big on your next getaway with our seasonal offers. Whether it’s a weekend escape or an extended stay, we have the perfect</p>
                        <div className="offer-footer">
                            <div className="off-price"><span className='sp-price'>$650</span> <span>Expiry: 31 Aug</span></div>
                            <a className='left-view-contant' href="#">view offer <span><FaArrowRight/></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="thumbnail">
                        <img src={"/assets/offer-img3.webp"} alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

