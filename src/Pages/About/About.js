import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container article-container py-5 mb-5">
      <div className="article-info-banner pb-3">
        <img
          src="../imgs/img1.png"
          alt="article-banner"
          className="banner-img w-100 "
        />
      </div>
      <div className="article-info-content">
        <h1 className="article-info-title py-3">About Ghost + Gatsby</h1>
        <p className="article-info-text ps-2 pb-4">
          Use Ghost as a completely decoupled headless CMS and bring your own
          front-end written in{" "}
          <a href="https://gatsbyjs.org/?ref=gatsby.ghost.io" className="link">
            Gatsby.js
          </a>{" "}
        </p>

        <div className="article-info-parag py-4">
          <h3 className="article-info-header pb-1">
            Build an API driven static-site
          </h3>
          <p className="article-info-text ps-2 pb-4">
            There has been a lot of progress around static site generators,
            front end frameworks and API-centric infrastructure in recent years,
            which has generated some very cool products, like Gatsby. Since
            Ghost allows you to completely replace its default Handlebars theme
            layer in favour of a front-end framework, you can use Gatsby to
            build your site statically from the Ghost API.
          </p>
          <div className="article-info-img pb-4">
            <img src="../imgs/headless-ghost.png" alt="article-img" />
          </div>
        </div>

        <div className="article-info-parag py-4">
          <h3 className="article-info-header pb-1">
            The headless-cms revolution
          </h3>
          <p className="article-info-text ps-2 pb-2">
            Using a static site generator usually involves storing Markdown
            files locally in the code repository. This would involve using a
            code editor to write content and a GIT workflow to publish - which
            works fine for small sites or developers. However, it's not ideal
            for professional publishers that need to scale. This is where a
            headless CMS comes in!
          </p>
          <p className="article-info-text ps-2 pb-4">
            Instead, you can use Ghost for authoring, and then build out your
            front-end in Gatsby to pull content from the Ghost API. This
            provides several benefits for publishers:
          </p>
          <ul className="text-list pb-4">
            <li>
              <p className="article-info-text ps-2">
                Developers can use their preferred stack
              </p>
            </li>
            <li>
              <p className="article-info-text ps-2">
                Writers have their preferred editor & content management
              </p>
            </li>
            <li>
              <p className="article-info-text ps-2">
                Performance is the maximum possible
              </p>
            </li>
            <li>
              <p className="article-info-text ps-2">
                Security is the maximum possible
              </p>
            </li>
            <li>
              <p className="article-info-text ps-2">
                Your site will be extremely scalable
              </p>
            </li>
          </ul>
          <p className="article-info-text ps-2 pb-5">
            Building sites in this way has become known as the{" "}
            <a
              href="https://jamstack.org/?ref=gatsby.ghost.io"
              className="link"
            >
              JAMstack
            </a>{" "}
            - (as in JavaScript, APIs, Markup). When you look at the bigger
            picture of{" "}
            <a
              href="https://www.gatsbyjs.org/blog/2018-10-04-journey-to-the-content-mesh/?ref=gatsby.ghost.io"
              className="link"
            >
              the content mesh
            </a>{" "}
            , it really starts to feel like an inevitable future for building
            websites.
          </p>
        </div>

        <div className="article-info-parag py-2">
          <h3 className="article-info-header pb-1">
            Official Gatsby.js Source Plugin + Starter
          </h3>
          <p className="article-info-text ps-2 pb-1">
            We rebuilt our entire{" "}
            <a
              href="https://ghost.org/docs/?ref=gatsby.ghost.io"
              className="link"
            >
              Ghost Docs
            </a>{" "}
            site with a front-end written in{" "}
            <a
              href="https://gatsbyjs.org/?ref=gatsby.ghost.io"
              className="link"
            >
              Gatsby.js
            </a>{" "}
            - which is a great example of what can be achieved with Ghost and
            Gatsby in the wild. We also shipped a few things to help others
            build their own sites using the same stack:
          </p>
        </div>
        <div className="article-info-parag py-2">
          <h3 className="article-info-header pb-1">
            ⚡{" "}
            <a
              href="#https://github.com/tryghost/gatsby-source-ghost?ref=gatsby.ghost.io"
              className="link"
            >
              gatsby-source-ghost
            </a>{" "}
            plugin
          </h3>
          <p className="article-info-text ps-2 pb-1">
            A straightforward Gatsby source plugin which wraps the Ghost API and
            makes it compatible with Gatsby and GraphQL, so it's quick and easy
            to load all your Ghost data into any Gatsby project.
          </p>
        </div>
        <div className="article-info-parag py-2">
          <h3 className="article-info-header pb-1">
            ⚡{" "}
            <a
              href="https://github.com/tryghost/gatsby-starter-ghost?ref=gatsby.ghost.io"
              className="link"
            >
              gatsby-starter-ghost
            </a>
          </h3>
          <p className="article-info-text ps-2 pb-1">
            An official{" "}
            <a
              href="https://github.com/tryghost/gatsby-starter-ghost?ref=gatsby.ghost.io"
              className="link"
            >
              Gatsby starter repository
            </a>{" "}
            which is pre-configured to get content from Ghost and output it in a
            clean, blog-style design. The fastest way to get up and running with
            Gatsby and Ghost is to fork this repository, and check out our{" "}
            <a
              href="https://ghost.org/docs/jamstack/gatsby/?ref=gatsby.ghost.io"
              className="link"
            >
              Gatsby docs
            </a>
            .
          </p>
        </div>

        <div className="article-info-parag pt-5">
          <h3 className="article-info-header pb-1">Official Netlify Support</h3>
          <p className="article-info-text ps-2 pb-2">
            Deploying a static site with Gatsby and Ghost should be easy - so
            we've partnered with Netlify, which we also use for Ghost Docs:
          </p>
        </div>
        <div className="article-info-parag py-1">
          <h3 className="article-info-header pb-1">
            ⚡{" "}
            <a
              href="https://ghost.org/integrations/netlify/?ref=gatsby.ghost.io"
              className="link"
            >
              Netlify integration for Ghost
            </a>{" "}
          </h3>
          <p className="article-info-text ps-2 pb-2">
            A straightforward Gatsby source plugin which wraps the Ghost API and
            makes it compatible with Gatsby and GraphQL, so it's quick and easy
            to load all your Ghost data into any Gatsby project.
          </p>
        </div>

        <div className="article-info-parag py-4">
          <h3 className="article-info-header pb-1">Future-proof publishing</h3>
          <p className="article-info-text ps-2 pb-1">
            Converging disparate technologies under a single front-end
            centralises otherwise decentralised services in a way which caters
            predominantly to the needs of the site owner, rather than the
            platform and fosters flexibility and scalability.
          </p>
          <div className="article-info-img py-4">
            <img src="../imgs/ghost-jamstack.png" alt="article-img" />
          </div>
          <p className="article-info-text ps-2 py-3">
            No more platform-specific plugins and extensions. Just one
            front-end, and many APIs; all connected together and served as a
            single site or application with Gatsby
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
