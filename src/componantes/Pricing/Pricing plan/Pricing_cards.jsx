import React from 'react'
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import data from '../pridata.json'

export function Pricing_cards() {
    const {price_cards} = data;
  return (
    <div className="Pricing_cards" data-aos="fade-up" data-aos-duration="800">
        <div className="row">
            {price_cards.map((i, k) =>(
                <div className="col-lg-4 col-md-6 col-12" key={k}>
                <div className="price-item">
                    <div className="price-header">
                        <span className="plan">{i.plan}</span>
                        <h3 className="card-price">${i.price}/
                            <span className="crd-time">{i.time}</span>
                        </h3>
                        <p className="crd-para">{i.description}</p>
                    </div>
                    <div className="price-body">
                        <ul className="pric-check">
                            {i.features.map((e, t) =>(
                                <li key={t}><span><HiMiniCheckBadge/></span>{e}</li>
                            ))}
                        </ul>
                        <a className='price-btn' href="#">book now <span><FaArrowRight/></span></a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

