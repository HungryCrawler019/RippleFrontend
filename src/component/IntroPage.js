import React, { useState, useEffect } from "react";
import video from "../images/splash_video.mp4";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    const videoElement = document.getElementById("splashVideo");

    const handleLoadedMetadata = () => {
      videoElement.controls = false;
    };

    const handleVideoEnd = () => {
      navigate('/mainpage');
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("ended", handleVideoEnd); // Add event listener for when the video ends

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("ended", handleVideoEnd); // Remove event listener when the component unmounts
    };
  }, []); // Add history to the dependency array
  
  const handleSkipIntro = () => {
    navigate('/mainpage');
  }

  return (
    <body style={{ margin: "0px" }}>
      <div className="splash_screen">
        <video autoPlay muted id="splashVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="skip_intro_btn" onClick={handleSkipIntro}>
          <Link to="/mainpage">Skip Intro</Link>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
