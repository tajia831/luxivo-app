import React from "react";
import "./Our_card.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import data from '../temdata.json'

export function Our_card() {
    const {team_section} = data;
    const iconList = {
        RiFacebookFill: <RiFacebookFill />,
        FaTwitter: <FaTwitter />,
        IoLogoInstagram: <IoLogoInstagram />,
        FaLinkedinIn: <FaLinkedinIn />
};
  return (
    <div className="container-fluid our-team">
      <div className="container">
        <div className="row">
            {team_section.map((item, k) =>(
                <div className="col-lg-4 col-md-6 col-12" key={k}>
            <div className="team-item">
              <div className="member-content">
                <div className="team-bg-img" style={{ backgroundImage: `url(assets/team/shape.webp)` }}></div>
                <img className="memder-img" src={item.image} alt="" />
                <div className="member-info">
                    <h4>{item.name}</h4>
                    <span className="position">{item.position}</span>
                    <div className="social-box">
                        {item.social_links.map((i, t) =>(
                            <a href="#" key={t}>{iconList[i.icon]}</a>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
}
