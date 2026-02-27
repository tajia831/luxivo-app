import "./Find_T_Place.css";
import data from "../data.json";
import { Find_input } from "./Find_input";

export function Find_T_Place() {
  return (
    <div className="container-fluid find">
      <div className="container">
        <div className="search-wrapper">
          {/* ----- Shapes ----- */}
          {data.shapes.slice(0, 2).map((item, i) => (
            <div key={i} className={`shape-${i + 1}`}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}

          {/* ----- Title ----- */}
          <div className="shape-text">
            <h3>{data.title}</h3>
          </div>

          {/* ----- Inputs Row 1 ----- */}
          <Find_input/>

          {/* Shape 3 */}
          <div className="shape-3">
            <img src={data.shapes[2].src} alt={data.shapes[2].alt} />
          </div>
        </div>
      </div>
    </div>
  );
}
