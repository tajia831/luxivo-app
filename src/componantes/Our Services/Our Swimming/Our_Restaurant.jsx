import React from "react";
import { FaArrowRight } from "react-icons/fa";

export function Our_Restaurant() {
  return (
    <div
      className="row swims-cards"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="col-lg-7 col-12">
        <div className="swims-content">
          <h1 className="swim-number">03</h1>
          <span className="swim-title">Restaurant</span>
          <h3 className="swim-text">
            <a href="#">Cafe & Restaurent Cenl</a>
          </h3>
          <span className="swi-line"></span>
          <p className="swi-para">
            Rapidiously myocardinate cross-platform intellectual capital after
            model. Appropriately create interactive infrastructures after are
            Holisticly facilitate stand-alone
          </p>
          <a className="swim-btn" href="/Service_details">
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className="col-lg-5 col-12">
        <img className="swim-imgs" src={"/assets/service-img3.webp"} alt="" />
      </div>
    </div>
  );
}
