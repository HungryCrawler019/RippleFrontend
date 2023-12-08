import React, { useState, useEffect } from "react";

import Header from "./Header";
import temperature from "../images/wired-flat-819-hot-temperature.gif";
import Footer from "./Footer";

const LocationPage = () => {
  return (
    <div className="">
      <Header />
      <main>
        <div className="body_box">
          <div className="container">
            <div className="row">
              <div className="column home-content location-page">
                <div className="servers-contnet">
                  <div className="loaction_content">
                    <h1>Location </h1>
                    <div className="location_inner">
                      <p>
                        XRP Kuwait servers are located in Kuwait City where the
                        temperature is <span>52°</span> degrees{" "}
                        <img src={temperature} width="80" height="80" />
                      </p>
                    </div>
                  </div>
                  <div className="location_map">
                    <iframe
                      id="map_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560823.5751655257!2d47.795471715108356!3d29.403074395666597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1687761439665!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
