import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { TbBrandFeedly } from "react-icons/tb";

function Header({ isHome }) {
  return (
    <div className="container-fluid header-banner">
      <div className="container  py-3">
        <div className="top-header mb-5 pt-3">
          <div className="top-header-left">
            <img src="../imgs/astronaut-cyberpunk.jpg" alt="logo" />
          </div>
          <div className="top-header-right">
            <Link to="https://telegram.com/tryghost">
              <PiTelegramLogoLight className="header-icons" />
            </Link>
            <Link to="https://www.facebook.com/ghost">
              <CiFacebook className="header-icons" />
            </Link>
            <Link to="https://feedly.com/i/subscription/feed/http://localhost:8000/rss/">
              <TbBrandFeedly className="header-icons" />
            </Link>
          </div>
        </div>
        {isHome === true && (
          <div className="header-hero py-5">
            <p className="main-hero">Ghost & Gatsby</p>
            <p className="side-hero">Thoughts, stories and JAMstack</p>
          </div>
        )}
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
