import React from 'react'
import './About_cards.css'
import data from '../about_data.json'
import { Why_Choose_Us } from './Why_Choose_Us';

export function About_cards() {
    const {cards} =data;
  return (
    <>
    <div className="container about-cards">
        <div className="row">
            {cards.map((i, k) =>(
                <div className="col-lg-4 col-md-6 col-12" key={k}>
                <div className="card-items">
                    <img className='card-img' src={i.image} alt="" />
                    <div className="card-content">
                        <h4>{i.title}</h4>
                        <p>{i.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    <Why_Choose_Us/>
    </>
  )
}

