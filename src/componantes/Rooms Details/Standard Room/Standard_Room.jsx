import React from 'react'
import './Standard_Room.css'
import data from '../de-data.json'
import { FaStar } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiShareNetwork } from "react-icons/pi";

export function Standard_Room() {
    const {stander_data} =data;
  return (
    <div className="container">
        <div className="stander-meta-top">
            <div className="row">
                <div className="col-lg-8 col-12" data-aos="fade-up" data-aos-duration="800">
                    <div className="stander-area">
                        <h3>Standard Room</h3>
                        <div className="ratings-quote d-flex">
                            <a href="#">(56 Review)</a>
                            <div className="rat-icon"><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span>
                            </div>
                            <p className='location-para'><span><MdOutlineLocationOn/></span> California</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="share-button" data-aos="fade-up" data-aos-duration="800">
                        <a href="#">share <span><PiShareNetwork/></span></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="stander-meta-info" data-aos="fade-up" data-aos-duration="800">
            {stander_data.map((i, k) =>(
                <div className="icon-img-box" key={k}>
                <img src={i.image} alt="" />
                <h5>{i.title}</h5>
            </div>
            ))}
        </div>
        <img data-aos="fade-up" data-aos-duration="800" className='stander-img' src={"/assets/Rooms-Details/single-img1.webp"} alt="" />
    </div>
  )
}

