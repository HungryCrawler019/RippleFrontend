import React, { useState } from "react";
import "./Header.css"; // Make sure to create a Header.css file for styling

import camelImage from "../../images/wired-lineal-1212-camel.gif";
import twitterImage from "../../images/twitter-icon-1.svg";
import threeHorizontalImage from "../../images/three-horizontal-lines-icon.svg";
import socialMediaImage from "../../images/x-social-media-white-icon.svg";
import { Link, NavLink } from "react-router-dom";
const Header = ({ isSticky }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };
  return (
    <header className={isSticky ? "no-sticky-header" : "sticky-header"}>
      <div className="top_header">
        <div className="container-fluid">
          <div className="row">
            <div className="logo_box column">
              <NavLink className="logo" to="/mainpage">
                <img width="60" height="60" src={camelImage} alt="Logo" />
                <span style={{ color: "#ff4040" }}>XRP</span>&nbsp;
                <span style={{ color: "#fff" }}>Kuwait</span>
              </NavLink>
              <div className="mobile_menu">
                <span className="menu-bar" onClick={() => toggleMenu()}>
                  <img
                    src={threeHorizontalImage}
                    width="60"
                    height="60"
                    alt="Menu"
                  />
                </span>
                <NavLink
                  to="https://twitter.com/33baid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialMediaImage} alt="Twitter" />
                </NavLink>
              </div>
            </div>
            <div
              className={`column header_navigation ${
                isMobileMenu && "menu_open"
              }`}
            >
              <nav>
                <ul className="navigation">
                  <li className="nav-items">
                    <NavLink to="/servers" activeClassName="active" onClick={() => toggleMenu()}>
                      Servers
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink to="/location" activeClassName="active" onClick={() => toggleMenu()}>
                      Location
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink to="/about" activeClassName="active" onClick={() => toggleMenu()}>
                      About
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink to="/contact" activeClassName="active" onClick={() => toggleMenu()}>
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-items" activeClassName="active" onClick={() => toggleMenu()}>
                    <NavLink to="/hub" activeClassName="active">
                      XRPK Hub
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="social_nav">
                <ul>
                  <li className="nav-items">
                    <NavLink
                      to="https://twitter.com/33baid"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={socialMediaImage}
                        alt="Twitter"
                        width={24}
                        height={21}
                        style={{ "margin-top": "-5px" }}
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
