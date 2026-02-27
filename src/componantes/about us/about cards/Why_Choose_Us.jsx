import React from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";

export function Why_Choose_Us() {
  return (
    <div className="container-fluid choose">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="choose-contant">
              <div className="room-section-title">
              <span data-aos="fade-up" data-aos-duration="800">
                <img src={"/assets/d-line.webp"} alt="" />
              </span>
              <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Why Choose Us</span>
              <h2 data-aos="fade-up" data-aos-duration="1200">Luxury & Comfort Our service always satisfaction</h2>
              <p className="choose-para" data-aos="fade-up" data-aos-duration="1400">The details of the bathroom set will be stacked in a tray a placed on the stone table or next to the washbasin in the bathroom. detail will be a plastic bag,</p>
              <div className="row" data-aos="fade-up" data-aos-duration="1400">
                <div className="col-6">
                    <div className="check-list">
                        <ul className='ps-0'>
                          <li><span><HiMiniCheckBadge/></span>Courtesy ofthe house</li>
                          <li><span><HiMiniCheckBadge/></span>High speedinternet</li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <div className="check-list">
                        <ul className='ps-0'>
                          <li><span><HiMiniCheckBadge/></span>Complimentarybreakfast</li>
                          <li><span><HiMiniCheckBadge/></span>Deliveries &shipping</li>
                        </ul>
                    </div>
                </div>
              </div>
              <a className="choose-btn" href="#" data-aos="fade-up" data-aos-duration="1800">Read more <span><GoArrowRight/></span></a>
            </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-12" data-aos="fade-up" data-aos-duration="1000">
            <img className="choose-img" src={"/assets/about/choose-img1.webp"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
