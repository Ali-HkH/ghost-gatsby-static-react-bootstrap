import React, { useEffect, useState } from "react";
import "./ArticleInfo.css";
import allArticles from "../../Data/Datas";
import { useParams } from "react-router-dom";

function ArticleInfo() {
  let { articleID } = useParams();
  const [mainArticle, setMainArticle] = useState({});

  useEffect(() => {
    let filteredArticle = allArticles.filter(
      (article) => article.id === articleID
    );
    setMainArticle(filteredArticle[0]);
  }, [mainArticle, articleID]);

  return (
    <div className="container article-container py-5 mb-5">
      <div className="article-info-banner pb-3">
        <img
          src={mainArticle.img}
          alt="article-banner"
          className="banner-img w-100 "
        />
      </div>
      <div className="article-info-content">
        <h1 className="article-info-title py-3">{mainArticle.title}</h1>

        <div className="article-info-parag py-4">
          <h3 className="article-info-header pb-1">
            A few things you should know
          </h3>
          <ul className="text-numeric-list">
            <li>
              <p className="article-info-text ps-2">
                Ghost is designed for ambitious, professional publishers who
                want to actively build a business around their content. That's
                who it works best for.
              </p>
            </li>
            <li>
              <p className="article-info-text ps-2">
                The entire platform can be modified and customised to suit your
                needs. It's very powerful, but does require some knowledge of
                code. Ghost is not necessarily a good platform for beginners or
                people who just want a simple personal blog.
              </p>
            </li>
            <li>
              <p className="article-info-text ps-2">
                It's possible to work with all your favourite tools and apps
                with hundreds of integrations to speed up your workflows,
                connect email lists, build communities and much more
              </p>
            </li>
          </ul>
        </div>
        <div className="article-info-parag py-4">
          <h3 className="article-info-header pb-1">Behind the scenes</h3>
          <p className="article-info-text ps-2">
            Ghost is made by an independent non-profit organisation called the
            Ghost Foundation. We are 100% self funded by revenue from our
            Ghost(Pro) service, and every penny we make is re-invested into
            funding further development of free, open source technology for
            modern publishing..
          </p>
          <p className="article-info-text ps-2">
            The version of Ghost you are looking at right now would not have
            been made possible without generous contributions from the open
            source community.
          </p>
        </div>
        <div className="article-info-parag py-4">
          <h3 className="article-info-header pb-1">Next up, the editor</h3>
          <p className="article-info-text ps-2 pb-4">
            The main thing you'll want to read about next is probably: the Ghost
            editor. This is where the good stuff happens.
          </p>
          <p className="article-info-text ps-5 text-border-start">
            The main thing you'll want to read about next is probably: the Ghost
            editor. This is where the good stuff happens.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleInfo;
