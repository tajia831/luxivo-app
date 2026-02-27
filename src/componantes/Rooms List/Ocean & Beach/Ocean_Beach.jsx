import React from 'react'
import './Ocean_Beach.css'
import data from './ocdata.json'
import { FaArrowRight } from "react-icons/fa";
import { Ocean_2_Beach } from './Ocean_2_Beach';
import { Ocean_3_Beach } from './Ocean_3_Beach';

export function Ocean_Beach() {
    const {data_1} = data;
  return (
    <div className="container ocean">
        <div className="row ocean-item">
            <div className="col-lg-7 col-md-12">
                <div className="ocean-img">
                    <img className='oce-img1' src={"/assets/room-list/room-1.webp"} alt="" data-aos="fade-up" data-aos-duration="800"/>
                    <img src={"/assets/room-list/room-2.webp"} alt="" data-aos="fade-down" data-aos-duration="1000"/>
                </div>
            </div>
            <div className="col-lg-5 col-md-12">
                <div className="ocean-content" data-aos="fade-up" data-aos-duration="1000">
                    <span className='oc-top-item'>{data_1.top_item}</span>
                    <h3 className='oc-title'>{data_1.title}</h3>
                    <p className='oc-pata'>{data_1.description}</p>
                    <div className="oc-price">
                        <span>From</span> ${data_1.price.from}
                        <span>/Per Night</span>
                    </div>
                    <div className="row">
                        {data_1.features.map((i, k) =>(
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
        <div><Ocean_2_Beach/></div>
        <div><Ocean_3_Beach/></div>
    </div>
  )
}

