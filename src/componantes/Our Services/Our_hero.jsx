import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

export function Our_hero() {
  return (
    <div className="container-fluid room-hero" style={{backgroundImage: `url(assets/room-grid/page-bg.webp)`}}>
      <div className="hero-content">
        <h1>Our Services</h1>
        <div className="breadcrumb">
          <span className='sp-link'><Link to="/">luxivo</Link></span> <span><RiArrowRightSLine/></span> <span className='room-p'> Our Services</span>
        </div>
      </div>
    </div>
  )
}

