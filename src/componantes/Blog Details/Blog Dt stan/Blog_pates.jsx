import React from 'react'
import './Blog_pates.css'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
//com
import { Blog_side } from '../../Blog standard/Blog sidebar/Blog_side';
import { Blog_pates_2 } from './Blog_pates_2';

export function Blog_pates() {
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
                            <p className='part-para'>In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from this that the freedom of elections, which is reckoned most important and very essential to the English Church, we, of our pure and unconstrained will, did grant <br/> <br/> Pope Innocent III, before the quarrel arose between us and our barons: and this we will observe, and our will is that it be observed in good faith by our heirs forever. We have also granted to all freemen of our kingdom, for us and our heirs forever.</p>
                            <Blog_pates_2/>
                        </div>
                    </div>
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

