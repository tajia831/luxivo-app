import React from "react";
import "./sidebar.css";
import { Sidebar_bottom } from "./Sidebar_bottom";

export function Sidebar_top() {
  return (
    <div className="sidebar-booking">
      <h4 className="side-title-h4">Book Your Room</h4>
      <div className="side-forms">
        <div className="side-group">
          <label>your name</label>
          <input type="text" placeholder="your name" />
        </div>

        <div className="side-group">
          <label>phone number</label>
          <input type="number" placeholder="phone number" />
        </div>

        <div className="side-group">
          <label>Check In</label>
          <input type="date" />
        </div>

        <div className="side-group">
          <label>Check Out</label>
          <input type="date" />
        </div>
      </div>
      <Sidebar_bottom/>
    </div>
  );
}
