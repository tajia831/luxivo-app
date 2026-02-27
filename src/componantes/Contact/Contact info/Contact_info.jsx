import React from 'react'
import './Contact_info.css'

export function Contact_info() {
  return (
    <div className="con-info-input">
        <h3 className='info-h3'>We’re Here to Make Your Stay <br/> Unforgettable</h3>
        <div className="from-box">
            <div className="f-group">
                <input type="text" placeholder='Your Name' />
            </div>
            <div className="f-group">
                <input type="email" placeholder='Your email' />
            </div>
            <div className="f-group">
                <input type="password" placeholder='Your phone' />
            </div>
            <div className="f-group">
                <textarea placeholder='your message'></textarea>
            </div>
            <a className='send-btn' href="#">send a massege</a>
        </div>
    </div>
  )
}

