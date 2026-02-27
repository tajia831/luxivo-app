import "./Room_1D.css";
import { FaWifi } from "react-icons/fa6";
import { FaTv } from "react-icons/fa6";
import { FaSwimmer } from "react-icons/fa";
import { CiDumbbell } from "react-icons/ci";
import { TbBed } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import { LuRefrigerator } from "react-icons/lu";
import { LuPlaneLanding } from "react-icons/lu";
import data from "../../../de-data.json";

export function Room_1D() {
  const { data_1d } = data;

  const icons = {
    FaWifi: <FaWifi />,
    FaTv: <FaTv />,
    FaSwimmer: <FaSwimmer />,
    CiDumbbell: <CiDumbbell />,
    TbBed: <TbBed />,
    FaHeadset: <FaHeadset />,
    FaShower: <FaShower />,
    LuRefrigerator: <LuRefrigerator />,
    LuPlaneLanding: <LuPlaneLanding />,
  };

  const { servicesAmenities } = data;

  return (
    <>
      <div
        className="room-contant-box"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3 className="contant-h3">{data_1d.roomDescription.title}</h3>
        <p className="contant-paragrap">
          {data_1d.roomDescription.text} <br /> <br />{" "}
          {data_1d.roomDescription.text2}
        </p>
      </div>

      <div
        className="room-contant-box"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h3 className="contant-h3">{data_1d.roomRules.title}</h3>
        <ul className="check-con-item">
          {data_1d.roomRules.rules.map((i, k) => (
            <li key={k}>{i}</li>
          ))}
        </ul>
      </div>

      <div
        className="room-contant-box"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <h3 className="contant-h3">{servicesAmenities.title}</h3>
        <div className="services-co-list">
          <div className="row">
            {servicesAmenities.items.map((item, i) => (
              <div className="col-lg-4" key={i}>
                <div className="se-box">
                  <h5>
                    <span>{icons[item.icon]}</span> {item.label}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
