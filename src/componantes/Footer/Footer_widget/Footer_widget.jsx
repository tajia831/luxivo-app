import React from 'react'
import "./Footer_widget.css"
import data from './fwdata.json'
import { Footer_link } from './Footer_link'
import { MdOutlineCalendarMonth } from "react-icons/md";


export function Footer_widget() {
  const {posts} = data;
  return (
    <div className="container Footer-widget">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="footer-info-wid">
            <div className="footer-logo">
              <img src={"/assets/logo-white.webp"} alt="" />
            </div>
            <p>Conveniently fashion market positioning readiness <br/> before sticky communities. Assertively matrix multif sources through team building</p>
            <div className="form-group">
              <input type="email" placeholder='Enter your email' />
              <a className='subscribe-btn' href="#">subscribe</a>
            </div>
          </div>
        </div>

        <Footer_link/>

        <div className="col-lg-3 col-md-6">
          <div className="foot-latest">
            <h2>Recent Post</h2>
            <div className="foot-post">
              {posts.map((item, k) =>(
                <div className="foot-post-1" key={k}>
                <img className='foot1' src={item.image} alt="" />
                <div className="foot-content">
                  <p><span><MdOutlineCalendarMonth/></span>{item.date}</p>
                  <h6><a href="#">{item.title}</a></h6>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

