import React from "react";
import data from "../Blog_data.json";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export function Blog_cards() {
  const { blog_item } = data;
  return (
    <div className="container new-blog">
      <div className="row">
        {blog_item.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="blog-item"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img src={item.image} alt="" />
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="meta-para">
                    <span>
                      <FaRegUser />
                    </span>{" "}
                    By <a href="#">{item.author}</a>
                  </p>
                  <p>
                    <span>
                      <FaRegComments />
                    </span>{" "}
                    {item.comments} comment
                  </p>
                </div>

                <h4>
                  <a href="#">{item.title}</a>
                </h4>

                <a className="blog-read-btn" href="#">
                  read more{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
