import "./ArticleBox.css";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";

function ArticleBox({ id, img, title, desc, author, time, isTag}) {
  return (
    <div className={`article-box ${isTag && "align-items-center"}`}>
      <div className="article-box-cover mb-1 ">
        <Link to={`/articleInfo/${id}`}>
          <img src={img} alt="article-cover" className="h-100" />
        </Link>
      </div>
      <div className="article-box-content">
        {isTag === false && <p className="article-guide mb-0">Getting Started</p>}
        <Link to={`/articleInfo/${id}`}>
          <p className="article-title mb-2">{title}</p>
        </Link>
        {isTag === false && <p className="article-body">{desc}</p>}
      </div>
      <div className="article-box-desc px-3 py-1">
          <div className="article-author">
            <span>
              <FaPencil />
            </span>{" "}
            <span className="ps-2">{author}</span>
          </div>
          <p className="article-time">{time}min read</p>
        </div>
    </div>
  );
}

export default ArticleBox;
