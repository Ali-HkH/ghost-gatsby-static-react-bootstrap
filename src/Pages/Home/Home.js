import React, { useState } from "react";
import "./Home.css";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import allArticles from "../../Data/Datas";

function Home() {

  const [articles, setArticles] = useState(allArticles)

  return (
    <div className="container py-5 my-5">
      <div className="row gy-5 gx-5">
        {articles.map((article) => (
          <div className="col-12 col-md-6 col-lg-4" key={article.id}>
            <ArticleBox isTag={false} {...article} />
              
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
