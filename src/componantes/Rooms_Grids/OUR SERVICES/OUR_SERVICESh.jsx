
import './OUR_SERVICESh.css'

export function OUR_SERVICESh() {
  return (
    <div className="container services">
    <div className="discover-text">
        <div className="Luxury-Comfor-title">
          <span  data-aos="fade-up" data-aos-duration="800">
            <img src={"/assets/d-line.webp"} alt="" />
          </span>
          <span className="rsub-title" data-aos="fade-up" data-aos-duration="1000">OUR SERVICES</span>
          <h2 className="ro-com-h2" data-aos="fade-up" data-aos-duration="1200">Improving Your Visit With <br/> Special Offers</h2>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-lg-4 col-md-6">
            <div className="service-left">
                <div className="left-icon">
                    <div className="c-icon">
                        <img src={"/assets/room-grid/icon-1.webp"} alt="" />
                    </div>
                    <h4 className='l-text'>Airport Transfer</h4>
                    <p className='l-para'>Hassle-free pick-up and drop-off services for a <br/> smooth travel experience. and round-the-clock monitoring to ensure.</p>
                </div>
            </div>

            <div className="service-left">
                    <div className="c-icon">
                        <img src={"/assets/room-grid/icon-2.webp"} alt="" />
                    </div>
                    <h4 className='l-text'>Smart Room Access</h4>
                    <p className='l-para'>Experience keyless entry and smart controls for <br/> lights, temperature, and entertainment, all at your fingertips.</p>
            </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="center-img">
                <img className='cen-img-bg' src={"/assets/room-grid/feature-img1.webp"} alt="" />
                <div className="center-shape">
                    <img src={"/assets/room-grid/feat-shape.webp"} alt="" />
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
            <div className="service-right">
                <div className="left-icon">
                    <div className="c-icon">
                        <img src={"/assets/room-grid/icon-3.webp"} alt="" />
                    </div>
                    <h4 className='l-text'>24/7 Front Desk Assistance</h4>
                    <p className='l-para'>Our friendly staff is available around the clock to assist you with check-ins, concierge services, bookings, and inquiries.</p>
                </div>
            </div>

            <div className="service-right">
                    <div className="c-icon">
                        <img src={"/assets/room-grid/icon-4.webp"} alt="" />
                    </div>
                    <h4 className='l-text'>Room Service</h4>
                    <p className='l-para'>Relax and dine in the comfort of your room with our 24/7 room service offering a variety of dishes and beverages.</p>
            </div>
        </div>
      </div>
      </div>
  )
}

