import React, { useState, useEffect } from "react";

import envelope from "../images/envelope-line-icon.svg";
import socialMedia from "../images/x-social-media-white-icon.svg";

const ContactPage = () => {
  return (
    <div className="">
      <div className="body_box">
        <div className="container">
          <div className="row">
            <div className="column home-content contact-page">
              <div className="servers-contnet" style={{
                marginTop : "100px"
              }}>
                <h1>Contact </h1>
                <div className="location_inner">
                  <h3>
                    We value your feedback and we are here to assist you. Please
                    feel free to reach out about using any of the methods below.
                    We look forward to hearing from you!
                  </h3>
                  <ul className="contact-information">
                    <li>
                      <img src={envelope} width="24" height="24" />{" "}
                      <a href="mailto:33baid@gmail.com">33baid@gmail.com</a>{" "}
                    </li>
                    <li>
                      <img src={socialMedia} width="24" height="24" />{" "}
                      <a href="https://twitter.com/33baid" target="_blank">
                        @33baid
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
