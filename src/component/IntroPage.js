import React, { useState, useEffect } from "react";
import video from "../images/splash_video.mp4";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    const videoElement = document.getElementById("splashVideo");

    const handleLoadedMetadata = () => {
      videoElement.controls = false;
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);
  return (
    <body style={{ margin: "0px" }}>
      <div className="splash_screen">
        <video autoPlay muted id="splashVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="skip_intro_btn">
          <Link to="/mainpage">Skip Intro</Link>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
