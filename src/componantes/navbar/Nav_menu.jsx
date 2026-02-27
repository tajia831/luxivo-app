import { Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";

export function Nav_menu() {
  return (
    <div className="nav-menu">
      <ul>
        <li>
           <Link>home
            <GoChevronDown /></Link>
          <ul className="drop-maun">
            <li>
              <Link to="/">home one</Link>
              <Link to="/">home two</Link>
              <Link to="/">home three</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>
            rooms & suites
            <GoChevronDown />
          </Link>
          <ul className="drop-maun">
            <li>
               <Link to="/Rooms_Grids">rooms grids</Link>
               <Link to="/Rooms_List">rooms list</Link>
               <Link to="/Rooms_Details">rooms details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>
            pages
            <GoChevronDown />
          </Link>
          <ul className="drop-maun">
            <li>
              <Link to="/About_us">about us</Link>
              <Link to="/Our_Services">our services</Link>
              <Link to="/Service_details">Service details</Link>
              <Link to="/Our_Team">our team</Link>
              <Link to="/Pricing">pricing</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>
            blog
            <GoChevronDown />
          </Link>
          <ul className="drop-maun">
            <li>
              <Link to="/Blog_standard">blog standard</Link>
              <Link to="/Blog_Grid">blog grid</Link>
              <Link to="/Blog_Details">blog details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Contact">contact</Link>
        </li>
      </ul>
    </div>
  );
}
