import React from "react";
import "./Header.css"; // Make sure to create a Header.css file for styling

import camelImage from "../../images/wired-lineal-1212-camel.gif";
import twitterImage from "../../images/twitter-icon-1.svg";
import threeHorizontalImage from "../../images/three-horizontal-lines-icon.svg";
import socialMediaImage from "../../images/x-social-media-white-icon.svg";
import { Link, NavLink } from "react-router-dom";
const Header = ({ isSticky }) => {
  return (
    <header className={isSticky ? "no-sticky-header" : "sticky-header"}>
      <div className="top_header">
        <div className="container-fluid">
          <div className="row">
            <div className="logo_box column">
              <NavLink className="logo" to="/">
                <img width="60" height="60" src={camelImage} alt="Logo" />
                <span style={{ color: "#ff4040" }}>XRP</span>&nbsp;{" "}
                <span style={{ color: "#fff" }}>Kuwait</span>
              </NavLink>
              <div className="mobile_menu" style={{ display: "none" }}>
                <span className="menu-bar">
                  <img
                    src={threeHorizontalImage}
                    width="60"
                    height="60"
                    alt="Menu"
                  />
                </span>
                <NavLink
                  href="https://twitter.com/33baid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterImage} alt="Twitter" />
                </NavLink>
              </div>
            </div>
            <div className="column header_navigation">
              <nav>
                <ul className="navigation">
                  <li className="nav-items">
                    <NavLink to="/servers" activeClassName="active">
                      Servers
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink to="/location" activeClassName="active">
                      Location
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink to="/contact" activeClassName="active">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-items" activeClassName="active">
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