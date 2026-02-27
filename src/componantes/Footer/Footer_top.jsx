import React from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

export function Footer_top() {
  return (
    <div className="container footer-top-area">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="footer-info-box">
            <div className="foo-icon">
              <span>
                <LiaPhoneVolumeSolid />
              </span>
            </div>
            <div className="foo-content">
              <span>Call us Anytime</span>
              <h5>+(163)-5565-06979</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="footer-info-box">
            <div className="foo-icon">
              <span>
                <HiOutlineMail />
              </span>
            </div>
            <div className="foo-content">
              <span>Send us E-Mail</span>
              <h5>Info.example@gmail.com</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="footer-info-box">
            <div className="foo-icon">
              <span>
                <SlLocationPin />
              </span>
            </div>
            <div className="foo-content">
              <span>Address</span>
              <h5>Evergreen Terrace, Brooklyn</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
