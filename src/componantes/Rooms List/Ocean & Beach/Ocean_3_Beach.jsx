import React from 'react'
import data from './ocdata.json'
import { FaArrowRight } from "react-icons/fa";

export function Ocean_3_Beach() {
    const {data_3} = data;
  return (
    <div className="row ocean-item">
                <div className="col-lg-7 col-md-12">
                    <div className="ocean-img">
                        <img className='oce-img1' src={"/assets/room-list/room-5.webp"} alt="" data-aos="fade-up" data-aos-duration="800"/>
                        <img src={"/assets/room-list/room-6.webp"} alt="" data-aos="fade-down" data-aos-duration="1000"/>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="ocean-content" data-aos="fade-up" data-aos-duration="1000">
                        <span className='oc-top-item'>{data_3.top_item}</span>
                        <h3 className='oc-title'>{data_3.title}</h3>
                        <p className='oc-pata'>{data_3.description}</p>
                        <div className="oc-price">
                            <span>From</span> ${data_3.price.from}
                            <span>/Per Night</span>
                        </div>
                        <div className="row">
                            {data_3.features.map((i, k) =>(
                                <div className="col-lg-6" key={k}>
                                <div className="icon-left-oc">
                                    <div className="oc-left-icon">
                                        <img src={i.icon} alt="" />
                                    </div>
                                    <h4 className='icon-text'>{i.text}</h4>
                                </div>
                            </div>
                            ))}
                        </div>
                        <a className='oc-btn' href="#">book now <span><FaArrowRight/></span></a>
                    </div>
                </div>
            </div>
  )
}

