import "./Counting.css";

export function Counting() {
  return (
    <div
      className="container-fluid Counting"
      style={{ backgroundImage: `url(assets/counter-bg.webp)` }}
    >
      <div className="container visible-count">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="count-content" data-aos="fade-up" data-aos-duration="800">
                <h2>635+</h2>
                <p>Luxury Rooms</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="count-content" data-aos="fade-up" data-aos-duration="800">
                <h2>85k+</h2>
                <p>Happy Guest</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="count-content" data-aos="fade-up" data-aos-duration="800">
                <h2>2.3k+</h2>
                <p>Five Star Ratings</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="count-content" data-aos="fade-up" data-aos-duration="800">
                <h2>2.8m+</h2>
                <p>Served Breakfast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
