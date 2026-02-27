import React from "react";
import { Room_1D } from "./Room_chiekd/Room_1D/Room_1D";
import { Room_2D } from "./Room_chiekd/Room_2D/Room_2D";
import { Sidebar_top } from "./sidebar/slide from/Sidebar_top";
import { Res_support } from "./sidebar/slide text/Res_support";

export function Room_Description() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <Room_1D />
          <Room_2D />
        </div>
        <div className="col-lg-4">
          <div className="sidebar-area">
            <Sidebar_top />
            <Res_support/>
          </div>
        </div>
      </div>
    </div>
  );
}
