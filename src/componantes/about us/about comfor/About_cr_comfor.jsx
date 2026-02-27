import { TiStarFullOutline } from "react-icons/ti";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { LuBath } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import data from "../about_data.json";

export default function About_cr_comfor() {
    const { about } = data;
  return (
    <div className="row" data-aos="fade-up" data-aos-duration="1000">
        {about.map((item, k) => (
          <div key={k} className="col-lg-3 col-md-6 col-12">
            <div className="see-item">
              <div className="see-imgs">
                <img src={item.image} alt="" />
                <div className="see-hover-content">
                  <div className="hide-content">
                    <div className="see-rating">
                      <span>
                        <TiStarFullOutline />
                      </span>
                      <span>
                        <TiStarFullOutline />
                      </span>
                      <span>
                        <TiStarFullOutline />
                      </span>
                      <span>
                        <TiStarFullOutline />
                      </span>
                      <span>
                        <TiStarFullOutline />
                      </span>
                    </div>
                    <h4 className="hide-se-h4">{item.title}</h4>
                    <div className="see-price">
                      ${item.price}
                      <span className="see-time">/{item.price_duration}</span>
                    </div>
                    <div className="see-meta">
                      <p>
                        <span>
                          <FaExpandArrowsAlt />
                        </span>{" "}
                        {item.meta.size}
                      </p>
                      <p>
                        <span>
                          <BiBed /> {item.meta.beds}
                        </span>
                      </p>{" "}
                      <br />
                      <p>
                        <span>
                          <LuBath /> {item.meta.bathrooms}
                        </span>
                      </p>
                    </div>
                    <a className="see-btns" href="#">
                      view details{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                  <div className="show-content">
                    <h4 className="hide-se-h4">{item.title}</h4>
                    <a className="see-btns" href="#">
                      view details{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}
