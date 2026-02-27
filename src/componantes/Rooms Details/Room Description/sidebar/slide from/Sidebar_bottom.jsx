import React from "react";
import data from "../../../de-data.json";

export function Sidebar_bottom() {
  const { check_box } = data;
  return (
    <>
      <div className="side-group">
        <label>Rooms</label>
        <select id="inputState" class="form-select">
          <option selected>select rooms</option>
          <option>01 rooms</option>
          <option>02 rooms</option>
          <option>03 rooms</option>
          <option>04 rooms</option>
        </select>
      </div>

      <div className="side-group">
        <label>Children</label>
        <select id="inputState" class="form-select">
          <option selected>select Children</option>
          <option>01 Children</option>
          <option>02 Children</option>
          <option>03 Children</option>
          <option>04 Children</option>
        </select>
      </div>
      <div className="side-group">
        <label>Extra Service</label>
      </div>

      <div className="chek-group">
        {check_box.extraServices.map((i, k) => (
          <div className="check-box" key={k}>
            <input className="chek" type="checkbox" id={i.id} />
            <label className="chek-text" for={i.id}>
              {i.label}
            </label>
          </div>
        ))}
      </div>
      <a className="side-btn" href="#">
        book now
      </a>
    </>
  );
}
