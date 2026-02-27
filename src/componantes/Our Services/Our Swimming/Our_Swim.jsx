import React from 'react'
import './Our_Swim.css'
import { FaArrowRight } from "react-icons/fa";
import { Our_Fitness } from './Our_Fitness';
import { Our_Restaurant } from './Our_Restaurant';

export function Our_Swim() {
  return (
    <div className="container swims">
        <div className="row swims-cards" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-lg-7 col-12">
                <div className="swims-content">
                    <h1 className="swim-number">01</h1>
                    <span className='swim-title'>Swimming</span>
                    <h3 className='swim-text'><a href="#">Indoor Swimming Pool</a></h3>
                    <span className='swi-line'></span>
                    <p className='swi-para'>Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone</p>
                    <a className='swim-btn' href="/Service_details"><span><FaArrowRight/></span></a>
                </div>
            </div>
            <div className="col-lg-5 col-12">
                <img className='swim-imgs' src={"/assets/service-img1.webp"} alt="" />
            </div>
        </div>
        <Our_Fitness/>
        <Our_Restaurant/>
    </div>
  )
}

