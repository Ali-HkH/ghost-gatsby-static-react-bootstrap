import React from "react";
import "./ArticleBox.css";
import { FaPencil } from "react-icons/fa6";

function ArticleBox({ img, title, author, time, children }) {
  return (
    <div className="article-box">
      <div className="article-box-cover mb-3 ">
        <img src={img} alt="article-cover h-100" />
      </div>
      <div className="article-box-content">
        <p className="article-guide mb-0">Getting Started</p>
        <p className="article-title mb-1">{title}</p>
        <p className="article-body">{children}</p>
        <div className="article-box-desc px-1 py-1">
          <div className="article-author">
            <span>
              <FaPencil />
            </span>{" "}
            <span className="ps-2">{author}</span>
          </div>
          <p className="article-time">{time}min read</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
