import React from 'react'
import './Blog_stand.css'
//icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
//com
import { Blog_p2_stand } from './Blog_p2_stand';
import { Blog_p3_stand } from './Blog_p3_stand';
import { Blog_side } from '../Blog sidebar/Blog_side';

export function Blog_stand() {
  return (
    <div className="container blog-st-area">
        <div className="row">
            <div className="col-lg-8 col-mg-12">
                <div className="bl-post">
                    <img className='bl-img' src={"/assets/blimg1.webp"} alt="" />
                    <div className="bl-post-con">
                        <div className="bl-icon-meta">
                            <ul className="icon-list">
                                <li><span><FaRegUser/></span><a href="#">luxivo</a></li>
                                <li><span><MdOutlineCalendarMonth/></span><a href="#">October 22, 2025</a></li>
                                <li><span><FaRegComments/></span><a href="#">No Comments</a></li>
                            </ul>
                        </div>
                        <h2 className="bl-title">A Touch Above in Every Feature of Our Hotel</h2>
                        <p className='bl-para'>In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from this that the freedom […]</p>
                        <a href="#" className="bl-read-btn">read more <span><GoArrowRight/></span></a>
                    </div>
                </div>
                <Blog_p2_stand/>
                <Blog_p3_stand/>
            </div>
            <div className="col-lg-4 col-mg-12">
                <div className="bl-side">
                    <Blog_side/>
                </div>
            </div>
        </div>
    </div>
  )
}