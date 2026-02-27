import { GoArrowRight } from "react-icons/go";
import "./Nav.css";
import { Nav_menu } from "./Nav_menu";
import { useState } from "react";

export function Nav() {
  const [navbar, setNavbar] = useState(false);
  const changebg = () => {
    if(window.scrollY >= 120){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebg);
  return (
    <>
    <div className={navbar ? "main-scroll main-head" :"main-head"}>
      <div className="container-fluid">
        <div className="main-menu">
          <div className="logo">
            <a href="#"><img src={"/assets/logo-white.webp"} alt="" /></a>
          </div>
          <div className="manu"><Nav_menu/></div>
          <div className="Quote-btn"><a href="#">Get a Quote <span><GoArrowRight style={{fontSize: `25px`, fontWeight: `400`}}/></span> </a></div>
        </div>
      </div>
    </div>
    </>
  );
}
