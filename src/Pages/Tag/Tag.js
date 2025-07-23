import { useState } from "react";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import allArticles from "../../Data/Datas";

function Tag() {
   const [articles, setArticles] = useState(allArticles);

   return (
      <div className="container py-5 my-2">
         <h1 className="fw-bold fs-1 pb-5">Getting Started</h1>
         <div className="row gy-4 gx-5">
            {articles.map((article) => (
               <div className="col-12 col-md-6 col-lg-4" key={article.id}>
                  <ArticleBox isTag={true} {...article} />
               </div>
            ))}
         </div>
      </div>
   );
}

export default Tag;
