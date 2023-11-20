import React from "react";
import "./Header.css"; // Make sure to create a Header.css file for styling

import camelImage from "../../images/wired-lineal-1212-camel.gif";
import twitterImage from "../../images/twitter-icon-1.svg";
import threeHorizontalImage from "../../images/three-horizontal-lines-icon.svg";
import socialMediaImage from "../../images/x-social-media-white-icon.svg";
const Header = () => {
  return (
    <header>
      <div className="top_header">
        <div className="container-fluid">
          <div className="row">
            <div className="logo_box column">
              <a className="logo" href="./html/mainpage.html">
                <img width="60" height="60" src={camelImage} alt="Logo" />
                <span style={{color: "#ff4040"}}>XRP</span>&nbsp; <span style={{ color: "#fff" }}>Kuwait</span>
              </a>
              <div className="mobile_menu" style={{ display: "none" }}>
                <span className="menu-bar">
                  <img
                    src={threeHorizontalImage}
                    width="60"
                    height="60"
                    alt="Menu"
                  />
                </span>
                <a
                  href="https://twitter.com/33baid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterImage} alt="Twitter" />
                </a>
              </div>
            </div>
            <div className="column header_navigation">
              <nav>
                <ul className="navigation">
                  <li className="nav-items">
                    <a href="./html/servers.html">Servers</a>
                  </li>
                  <li className="nav-items">
                    <a href="./html/location.html">Location</a>
                  </li>
                  <li className="nav-items">
                    <a href="./html/about.html">About</a>
                  </li>
                  <li className="nav-items">
                    <a href="./html/contact.html">Contact</a>
                  </li>
                  <li className="nav-items">
                    <a className=" active" href="./hub">XRPK Hub</a>
                  </li>
                </ul>
              </nav>
              <div className="social_nav">
                <ul>
                  <li className="nav-items">
                    <a
                      href="https://twitter.com/33baid"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={socialMediaImage}
                        alt="Twitter"
                        width={24}
                        height={21}
                        style={{"margin-top": "-5px"}}
                      />
                    </a>
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
