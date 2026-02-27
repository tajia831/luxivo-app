import React from "react";
import "./News_Blog.css";
import { FaArrowRight } from "react-icons/fa";
import { News_card } from "./News_card";

export function News_Blog() {
  return (
    <div className="container new-blog">
      <div className="special-title row">
        <div className="col-lg-8 col-md-12">
          <div className="room-section-title">
            <span data-aos="fade-up" data-aos-duration="800">
              <img src={"/assets/d-line.webp"} alt="" />
            </span>
            <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">NEWS & BLOG</span>
            <h2 data-aos="fade-up" data-aos-duration="1200">Check Our Latest Blog Post</h2>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="special-title-btn" data-aos="fade-up" data-aos-duration="800">
            <a href="#">
              view all post{" "}
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <News_card />
      </div>
    </div>
  );
}
