import React from "react";
import "./Blog_side.css";
import { FaSearch } from "react-icons/fa";
import { LuChevronsRight } from "react-icons/lu";
import data from '../bldata.json'

export function Blog_side() {
  const {recent_posts_text, recent_posts_arrow, tag_buttons} = data;
  return (
    <>
      <div className="bl-search">
        <div className="si-se-form">
          <input type="text" placeholder="search" />
          <a href="#" className="bl-sub-btn">
            <FaSearch />
          </a>
        </div>
      </div>
      <div className="recent-post">
        <h3 className="recent-heder">Recent Posts</h3>
        <ul>
          {recent_posts_text.map((t, k) =>(
            <li key={k}>
            <a href="#">{t}</a>
          </li>
          ))}
        </ul>
      </div>
      <div className="recent-post">
        <h3 className="recent-heder">Categories</h3>
        <ul className="recent-arrow">
          {recent_posts_arrow.map((a, p) =>(
            <li key={p}>
            <span>
              <LuChevronsRight />
            </span>
            <a href="#">{a.title}</a>
          </li>
          ))}
        </ul>
      </div>
      <div className="recent-post">
        <h3 className="recent-heder">Tags</h3>
        <div className="tags-btns">
          {tag_buttons.map((b, s) =>(
            <a href="#" key={s}>{b}</a>
          ))}
        </div>
      </div>
    </>
  );
}
