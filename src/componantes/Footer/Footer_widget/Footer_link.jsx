import React from "react";
import data from "./fwdata.json";

export function Footer_link() {
  const { quickLinks } = data;
  const { usefullinks } = data;
  return (
    <>
    <div className="contest-part">
      <div className="col-lg-3 col-md-6">
        <div className="nav-manu-2">
          <h2>{quickLinks.title}</h2>
          <div className="manu-link">
            <ul>
              {quickLinks.links.map((i, k) => (
                <li key={k}>
                  <a href="#">{i.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="nav-manu-3">
          <h2>{usefullinks.title}</h2>
          <div className="manu-link">
            <ul>
              {usefullinks.links.map((it, ky) => (
                <li key={ky}>
                  <a href="#">{it.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
