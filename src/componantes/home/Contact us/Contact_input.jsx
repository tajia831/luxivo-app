import React from 'react'

export function Contact_input() {
  return (
    <div className="container">
            <div className="row contact-box">
          <div className="col-lg-7 col-md-12">
            <div className="contact-booking">
              <div className="booking-title">
                <span data-aos="fade-up" data-aos-duration="800">
                  <img src={"/assets/d-line.webp"} alt="" />
                </span>
                <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">Contact us</span>
                <h2 data-aos="fade-up" data-aos-duration="1200">We’re Here to Make Your Stay Unforgettable</h2>
                <p data-aos="fade-up" data-aos-duration="1400">
                  Have questions, need help with a reservation, or want to plan
                  a custom <br /> experience? Our team is just a message away.
                </p>
              </div>
              <div className="booking-input-box" data-aos="fade-up" data-aos-duration="1600">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="from-group">
                      <label>name</label>
                      <input type="text" placeholder="your name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="from-group">
                      <label>Email</label>
                      <input type="email" placeholder="your Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="from-group">
                      <label>Check In</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="from-group">
                      <label>Check Out</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-group">
                      <label>massage</label>
                      <textarea
                        className="massage-box"
                        placeholder="write massage"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="check-btn">
                      <a href="#">check availability</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

