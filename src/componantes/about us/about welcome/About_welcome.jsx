import React from "react";
import "./About_welcome.css";
import { About_slider } from "./About_slider";

export function About_welcome() {
  return (
    <>
    <div className="container welcome">
      <div className="ab-contant-box">
        <div className="discover-text">
          <div className="Luxury-Comfor-title">
            <span data-aos="fade-up" data-aos-duration="800">
              <img src={"/assets/d-line.webp"} alt="" />
            </span>
            <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Welcome to our luxivo hotel</span>
            <h2 className="ro-com-h2" data-aos="fade-up" data-aos-duration="1200">We always care about your experience</h2>
            <p className="oc-pata" data-aos="fade-up" data-aos-duration="1400">Welcome to Luxivo, your sanctuary of elegance, comfort, and unforgettable experiences. Nestled between turquoise waters and lush tropical landscapes, our resort offers more than just a stay — it’s a journey into relaxation, indulgence, and discovery. <br/> <br/> Since 1989, we have been dedicated to redefining hospitality, blending world-class amenities with warm, personalized service. From our luxurious rooms and suites to our award-winning dining, private beach, and rejuvenating spa, every detail is designed to make your time with us truly exceptional. <br/> <br/> Whether you’re here for a romantic escape, a family getaway, or a wellness retreat, [Resort Name] is where cherished memories are made and dreams come to life.</p>
            <img data-aos="fade-up" data-aos-duration="2000" src={"/assets/about/sign-1.webp"} alt="" />
            <h5 className="about-h5" data-aos="fade-up" data-aos-duration="2000">Dave Bautista - General Manager luxvio Hotel</h5>
          </div>
        </div>
      </div>
    </div>
    <About_slider/>
    </>
  );
}
