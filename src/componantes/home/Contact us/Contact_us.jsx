import React from "react";
import "./Contact_us.css";
import { Contact_input } from "./Contact_input";

export function Contact_us() {
  return (
    <div className="container-fluid contact-one">
      <div
        className="contact-bg-left"  data-aos="fade-up" data-aos-duration="800"
        style={{ backgroundImage: `url(assets/contact-bg.webp)` }}
      >
        <div className="contact-info">
          <span>
            <img src={"/assets/d-line.webp"} alt="" />
          </span>
          <span>Call us for any inquiry</span>
          <h3 className="contact-call">
            <a href="#">(601) 236 50 543</a>
          </h3>
        </div>
        </div>
        <div
          className="contact-bg-right"
          style={{ backgroundImage: `url(assets/contact-bg-two.webp)` }}
        ></div>
        <div><Contact_input/></div>
    </div>
  );
}
