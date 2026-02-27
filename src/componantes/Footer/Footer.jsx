import React from "react";
import "./Footer.css";
import { Footer_top } from "./Footer_top";
import { Footer_widget } from "./Footer_widget/Footer_widget";

export function Footer() {
  return (
    <div
      className="container-fluid main-footer"
      style={{ backgroundImage: `url(assets/footer-bg.webp)` }}
    >
      <div>
        <Footer_top />
        <Footer_widget/>
      </div>

      <div className="coptright-area">
        <p>Copyright © 2025 Luxivo. All rights reserved.</p>
      </div>
    </div>
  );
}
