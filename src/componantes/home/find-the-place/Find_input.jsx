import { GoChevronDown } from "react-icons/go";
import data from "../data.json";

export function Find_input() {
  return (
    <div className="row input-site">
            <div className="col-lg-5 col-12 d-flex input-1">
              {data.form.row1.map((input, index) => (
                <div className={input.class} key={index}>
                  <label className="labels">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
            </div>

            {/* ----- Row 2 ----- */}
            <div className="col-lg-5 col-12 d-flex input-2">
              {/* Dropdown */}
              <div className="select-bar">
                <label className="labels">
                  {data.form.row2[0].dropdown.label}
                </label>
                <div className="dropdown">
                  <span className="btn guests" type="button" data-bs-toggle="dropdown">
                    {data.form.row2[0].dropdown.placeholder} <GoChevronDown />
                  </span>

                  <ul className="dropdown-menu">
                    {data.form.row2[0].dropdown.items.map((item, i) => (
                      <li key={i}>
                        <a className="dropdown-item" href="#">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Phone Number */}
              <div className={data.form.row2[1].class}>
                <label className="labels">{data.form.row2[1].label}</label>
                <input
                  type={data.form.row2[1].type}
                  placeholder={data.form.row2[1].placeholder}
                />
              </div>
            </div>
            {/* Button */}
            <div className="col-lg-2 col-12 ps-0 d-inline-flex align-items-end">
              <a className={data.form.button.class} href={data.form.button.href}>
                {data.form.button.text}
              </a>
            </div>
          </div>
  )
}
