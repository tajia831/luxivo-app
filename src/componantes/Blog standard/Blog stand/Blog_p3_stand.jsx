import { FaRegUser } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export function Blog_p3_stand() {
  return (
    <div className="bl-post2">
      <img className="bl-img" src={"/assets/blimg3.webp"} alt="" />
      <div className="bl-post-con">
        <div className="bl-icon-meta">
          <ul className="icon-list">
            <li>
              <span>
                <FaRegUser />
              </span>
              <a href="#">luxivo</a>
            </li>
            <li>
              <span>
                <MdOutlineCalendarMonth />
              </span>
              <a href="#">October 22, 2025</a>
            </li>
            <li>
              <span>
                <FaRegComments />
              </span>
              <a href="#">No Comments</a>
            </li>
          </ul>
        </div>
        <h2 className="bl-title">
          Start resources appropriately using line metrics.
        </h2>
        <p className="bl-para">
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free, and shall have her rights entire, and her liberties
          inviolate; and we will that it be thus observed; which is apparent
          from this that the freedom […]
        </p>
        <a href="#" className="bl-read-btn">
          read more{" "}
          <span>
            <GoArrowRight />
          </span>
        </a>
      </div>
    </div>
  )
}