import React from "react";
import { FaArrowRight } from "react-icons/fa";

export function Our_Fitness() {
  return (
    <div
      className="row swims-cards"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
        <div className="col-lg-5 col-12">
        <img className="swim-img2" src={"/assets/service-img2.webp"} alt="" />
      </div>
      <div className="col-lg-7 col-12">
        <div className="swims-content">
          <h1 className="swim-number">02</h1>
          <span className="swim-title">Fitness Zone</span>
          <h3 className="swim-text">
            <a href="#">Gym Training Grounds</a>
          </h3>
          <span className="swi-line"></span>
          <p className="swi-para">
            Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone
          </p>
          <a className="swim-btn" href="/Service_details">
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
