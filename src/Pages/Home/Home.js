import React from "react";
import "./Home.css";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";

function Home() {
  return (
    <div className="container py-5 px-5 my-5">
      <div className="row gy-5 gx-5">
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img1.png"
            title="About Ghost + Gatsby"
            author="Ghost"
            time="3"
          >
            Build an API driven static-site with Gatsby.js and use Ghost as a
            completely decoupled headless CMS. Read more about how it works and
            how to use this starter theme here!
          </ArticleBox>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img2.png"
            title="Welcome to Ghost"
            author="Gatsby"
            time="1"
          >
            Welcome, it's great to have you here.
            We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.
          </ArticleBox>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img3.png"
            title="Writing posts with Ghost ✍️"
            author="Ghost"
            time="2"
          >
            Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.
          </ArticleBox>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img4.png"
            title="Publishing options"
            author="Gastby"
            time="1"
          >
            The Ghost editor post settings menu has everything you need to fully optimise and distribute your content effectively.
          </ArticleBox>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img5.png"
            title="Managing admin settings"
            author="Ghost"
            time="2"
          >
            There are a couple of things to do next while you're getting set up: making your site private and inviting your team.
          </ArticleBox>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img6.png"
            title="Organising your content"
            author="Ghost"
            time="2"
          >
            Ghost has a flexible organisational taxonomy called tags and the ability to create custom site structures using dynamic routes.
          </ArticleBox>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img7.png"
            title="Apps & integrations"
            author="Gatsby"
            time="1"
          >
            Work with all your favourite apps and tools or create your own custom integrations using the Ghost API.
          </ArticleBox>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ArticleBox
            img="./imgs/img8.png"
            title="Creating a custom theme"
            author="Ghost"
            time="3"
          >
            Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.
          </ArticleBox>
        </div>
      </div>
    </div>
  );
}

export default Home;
