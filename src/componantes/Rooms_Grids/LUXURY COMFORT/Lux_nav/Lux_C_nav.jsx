import React, { useState } from 'react'
import { Lux_see } from './Lux_see';
import './Lux_c.css'
import { Luxury_Room } from './Luxury_Room';
import { Suits_Room } from './Suits_Room';
import { Deluxe_Room } from './Deluxe_Room';
import { Twine_Rooms } from './Twine_Rooms';

export function Lux_C_nav() {
  const [toggle, setToggle] =useState(1);

  function updatetoggle(id) {
    setToggle(id);
  }
  return (
    <>
    <div className="luxury-filter-nav">
      <ul>
        <li>
          <a onClick={()=>updatetoggle(1)}>SEE ALL</a>
        </li>
        <li>
          <a onClick={()=>updatetoggle(2)}>Luxury Room</a>
        </li>
        <li>
          <a onClick={()=>updatetoggle(3)}>Suits Room</a>
        </li>
        <li>
          <a onClick={()=>updatetoggle(4)}>Deluxe Room</a>
        </li>
        <li>
          <a onClick={()=>updatetoggle(5)}>Twine Rooms</a>
        </li>
      </ul>
    </div>

    <div className="isotope-main-cards">
      <div className={toggle === 1 ? "sho-com" : "hide-card"}>
        <Lux_see/>
      </div>
      <div className={toggle === 2 ? "sho-com" : "hide-card"} >
        <Luxury_Room/>
      </div>
      <div className={toggle === 3 ? "sho-com" : "hide-card"}>
        <Suits_Room/>
      </div>
      <div className={toggle === 4 ? "sho-com" : "hide-card"}>
        <Deluxe_Room/>
      </div>
      <div className={toggle === 5 ? "sho-com" : "hide-card"}>
        <Twine_Rooms/>
      </div>
    </div>
    </>
  )
}

