import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";


function Header({ isHome }) {

  return (
    <div className="container-fluid header-banner">
      <div className="container  py-3 px-5">
        <div className="top-header mb-5 pt-3">
          <div className="top-header-left">
            <img src="./imgs/ghost-logo-lime.png" alt="logo" />
          </div>
          <div className="top-header-right">
            <FaTelegram className="header-icons"/>
            <FaFacebook className="header-icons"/>
            <FaWifi className="header-icons"/>
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
