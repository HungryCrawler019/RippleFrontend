import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

const NotFoundPage = () => {
  const [message, setMessage] = useState(
    "The page you are looking for does not exist."
  );

  return (
    <Container>
      <img
        src="/html/assets/images/404-not-found-theme.jpg"
        alt="Camel"
        style={{
          width: "40%",
          position: "fixed",
          bottom: 0,
          left: "-20%",
          zIndex : "0",
        }}
      />
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span className="fs-4 text-black text-center">404 Page not found</span>
        <img
          src="/html/assets/images/warning.png"
          style={{
            width: "20vw",
          }}
          alt="Warning"
        />
        <div style={{
          display : "flex",
          flexDirection : "column",
          marginTop : "30px"
        }}>
          <span
            className="text-black text-center fw-bold"
            style={{
              fontSize: "50px",
              lineHeight: 1,
            }}
          >
            SLOW DOWN
          </span>
          <span className="text-danger text-end">CAMELS CROSSING</span>
        </div>
        <div style={{
          width : "70%"
        }}>
          <p
            className="text-black fs-5"
            style={{
              marginBottom: 0,
            }}
          >
            The page you are looking for does not exist.
          </p>
          <p className="text-black">
            If you think this is a mistake, please{" "}
            <a href="/contact" className="text-black text-decoration-underline">
              contact us
            </a>
            &nbsp;or click the home button to go back to the main page.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
