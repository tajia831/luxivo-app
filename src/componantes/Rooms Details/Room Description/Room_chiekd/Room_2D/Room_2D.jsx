import React from 'react'
import './Room_2D.css'
import data from "../../../de-data.json";
import { Ro_fea_slider } from './Ro_fea_slider';

export function Room_2D() {
    const {ro_Features} =data;
  return (
    <>
    <div className="cancellation" data-aos="fade-up" data-aos-duration="2000">
        <h3 className="contant-h3">Cancellation Policy:</h3>
        <p className="contant-paragrap">Cancellations made 48 hours or more before the check-in date will receive a full refund. The full amount of the reservation will be charged at the time of booking.</p>
    </div>

    <div className="Room-Features" data-aos="fade-up"
        data-aos-duration="2200">
            <h3 className="contant-h3">Room Features</h3>
            <div className="row">
                {ro_Features.features.map((i, k) =>(
                    <div key={k} className="col-lg-4 mb-10">
                    <p className='features-para'>  {i}</p>
                </div>
                ))}
            </div>
            <img className='features-img' src={"/assets/Rooms-Details/single-img2.webp"} alt="" />
            <p className="contant-paragrap">Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and style. Each room features modern amenities, plush furnishings, and thoughtful touches to ensure a relaxing stay.</p>
            <h3 className="contant-h3" data-aos="fade-up"
        data-aos-duration="2400">Room Gallery</h3>
            <div data-aos="fade-up"
        data-aos-duration="2400"><Ro_fea_slider/></div>
        </div>
    </>
  )
}

