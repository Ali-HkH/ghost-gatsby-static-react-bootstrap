import React, { useEffect, useState } from "react";
import "./Author.css";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import allArticles from "../../Data/Datas";

function Author() {
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    getRandomArticles()
  },[])

  function getRandomArticles() {
    let random = Math.floor(Math.random() * allArticles.length)
    let slicedArticles = allArticles.slice(random, random+3)
    setRandomArticles(slicedArticles)
  }

  return (
    <div className="container py-5 my-5">
      <div className="author-header pb-5">
        <div className="author-details">
          <p className="author-name mb-0">Ghost</p>
          <p className="author-desc">The ghosts swarm, they speak as one person</p>
          <div className="author-socials">
            <a href="#">website</a>
            <a href="#">tweeter</a>
            <a href="#">facebook</a>
          </div>
        </div>
        <div className="author-pic">
          <img src={`${process.env.PUBLIC_URL}/imgs/astronaut-cyberpunk.jpg`} alt="author-pic" />
        </div>
      </div>
      <div className="row gy-5 gx-5">
        <p className="recomended-header mb-0">Recomended Articles...</p>
        {randomArticles.map((article) => (
          <div className="col-12 col-md-6 col-lg-4" key={article.id}>
            <ArticleBox isTag={false} {...article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
