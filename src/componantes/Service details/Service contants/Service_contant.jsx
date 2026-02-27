import React from 'react'
import './Service_contant.css'
import { HiMiniCheckBadge } from "react-icons/hi2";
import data from '../serdata.json'

export function Service_contant() {
    const {serviceSingle, checklist} =data;
  return (
    <div className="container serv-con">
        <img className='ser-con-img' data-aos="fade-up" data-aos-duration="800" src={serviceSingle.headerImage} alt="" />
        <h3 className='ser-h3' data-aos="fade-up" data-aos-duration="1000">{serviceSingle.title}</h3>
        <p className='ser-p' data-aos="fade-up" data-aos-duration="1000">{serviceSingle.description1} <br/> <br/> {serviceSingle['description1-1']}</p>
        <h3 className='ser-h3' data-aos="fade-up" data-aos-duration="1000">{serviceSingle.subTitle1}</h3>
        <p className='ser-p' data-aos="fade-up" data-aos-duration="1000">{serviceSingle.description2}</p>
        <div className="row" data-aos="fade-up" data-aos-duration="1000">
            {serviceSingle.rowImages.map((m, k) =>(
                <div className="col-6" key={k}>
                <img className='ser-row-img' src={m} alt="" />
            </div>
            ))}
        </div>
        <p className='ser-p' data-aos="fade-up" data-aos-duration="1000">{serviceSingle.description3}</p>
        <h3 className='ser-h3' data-aos="fade-up" data-aos-duration="1200">{serviceSingle.featuresTitle}</h3>
        <div className="row ser-ul" data-aos="fade-up" data-aos-duration="1200">
            {checklist.map((i, k) =>(
                <div className="col-lg-3 col-md-4 col-6" key={k}>
                <div className="ser-check-list">
                    <li><span><HiMiniCheckBadge/></span>{i.text}</li>
                </div>
            </div>
            ))}
        </div>
        <h3 className='ser-h3' data-aos="fade-up" data-aos-duration="2200">Frequently Asked Question</h3>
        <h5 className='accordion' data-aos="fade-up" data-aos-duration="2400">What time is check-in and check-out?</h5>
        <h5 className='accordion-1' data-aos="fade-up" data-aos-duration="2400">Is breakfast included in the room rate?</h5>
        <p className='ser-p-1' data-aos="fade-up" data-aos-duration="2400">At U Hotels & Resorts we provide our guests a unique service of 24 hour use of room, meaning that no matter what time you check in, where you can enjoy your stay from the time you check in, until the time you check out the next day. However, during high occupancy periods</p>
        <h5 className='accordion-a' data-aos="fade-up" data-aos-duration="2400">What activities are available at the resort?</h5>
        <h5 className='accordion-a' data-aos="fade-up" data-aos-duration="2400">Can I cancel or change my booking?</h5>
    </div>
  )
}

