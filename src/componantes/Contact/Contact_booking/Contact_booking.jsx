import React from 'react'
import './Contavt_booking.css'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Contact_info } from '../Contact info/Contact_info';

export function Contact_booking() {
  return (
    <div className="container con-booling">
        <div className="con-text-box">
            <h3>Need help with your online booking, have a question or need <br/> more information? Just drop us a line!</h3>
            <p>After the model, myocardinate cross-platform intellectual capital quickly. After maintenance, appropriately build interactive infrastructures. <br/> Holistically support independent</p>
        </div>
        <div className="row">
            <div className="col-lg-5 col-12">
                <div className="con-box-info">
                    <div className="con-inner">
                        <h3>LOCATION:</h3>
                        <p>3949 State 38b Rte <br/>Newark Valley, New York(NY),139</p>
                        <h3>CONTACT:</h3>
                        <p>+99 (0) 432 505 8236 <br/>luxivo456@gmail.com</p>
                        <h3>SOCIAL:</h3>
                        <div className="con-so-box">
                            <a href="#"><RiFacebookFill/></a>
                            <a href="#"><FaTwitter/></a>
                            <a href="#"><FaLinkedinIn/></a>
                            <a href="#"><FaPinterestP/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-12">
                <Contact_info/>
            </div>
        </div>
    </div>
  )
}
