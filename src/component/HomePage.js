import React, { useState, useEffect } from "react";
import ok from "../images/wired-flat-14-doc-ok.gif";
import logo from "../images/52.png";
import Typed from "react-typed";

const useExternalScript = (src) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

const HomePage = () => {
  const [changeText, setChangeText] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useExternalScript(
    "https://files.coinmarketcap.com/static/widget/currency.js"
  );

  const handleComplete = () => {
    setTimeout(() => {
      setIsPaused(true);
    }, 6000);
  };
  return (
    <div className="">
      <div className="body_box">
        <div className="container">
          <div className="row">
            <div className="column home-content">
              <div className="home_page_content">
                <div className="home_content">
                  <div className="top-heading-content">
                    <h3>All the way</h3>
                    <h1>
                      From a <span>52°</span> degree country
                    </h1>
                    <h5>
                      To the <span>XRP</span> Ledger
                    </h5>
                  </div>
                  <div className="animated-content">
                    <div className="xrpl_blue">
                      <span>XRPL</span> is{" "}
                    </div>
                    <div className="xrpl-content">
                      {" "}
                      {changeText ? "FAST" : "a"}{" "}
                    </div>
                    <div className="text">
                      <Typed
                        strings={[
                          "community powered utility",
                          "scalable and sustainable blockchain",
                          "decentralized, public blockchain",
                          "greener blockchain",
                          "5",
                          "4",
                          "3",
                          "2",
                          "1",
                          `<img src='${ok}'>`,
                        ]}
                        typeSpeed={60}
                        backSpeed={40}
                        className="Typewriter"
                        showCursor={false}
                        preStringTyped={(index, { strings, backSpeed }) => {
                          const isNumber =
                            !isNaN(parseFloat(strings[index])) &&
                            isFinite(strings[index]);
                          setChangeText(isNumber);

                          const lastIndex = strings.length - 1;

                          setIsPaused(lastIndex == index);
                        }}
                        onComplete={handleComplete}
                        stopped={isPaused}
                      />
                    </div>
                  </div>
                </div>
                <div className="home-widget">
                  {/* <div className="coinmarketcap-currency-widget">
                    <div className="header">
                      <div className="logo">
                        <img src={logo} />
                      </div>
                      <div className="title">
                        <h2>
                          <a href="#">XRP (XRP)</a>
                        </h2>
                        <h4>
                          0.658350 <span>USD</span>{" "}
                          <span className="red-text">(-4.18%)</span>
                        </h4>
                      </div>
                    </div>
                    <div className="details">
                      <div className="">
                        <p>RANK</p>
                        <span>5</span>
                      </div>
                      <div className="">
                        <p>MARKET CAP</p>
                        <span>$35.62 B USD</span>
                      </div>
                      <div className="">
                        <p>VOLUME</p>
                        <span>$1.38 B USD</span>
                      </div>
                    </div>
                    <div className="footer">Powered by CoinMarketCap</div>
                  </div> */}
                  <div
                    className="coinmarketcap-currency-widget"
                    data-currencyid="52"
                    data-base="USD"
                    data-secondary=""
                    data-ticker="true"
                    data-rank="true"
                    data-marketcap="true"
                    data-volume="true"
                    data-statsticker="true"
                    data-stats="USD"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row d-flex"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "70px 0px 10px 0px",
            }}
          >
            <div className="title d-flex justify-content-center">
              <h4>XRPL live statistics</h4>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{
                border: "1px solid #A9A9A9",
                width: "100%",
                margin: "10px 0px",
                padding: "15px 20px",
                overflowX: "auto",
              }}
            >
              <div className="statistics-item">
                <span>Ledger index</span>
                <a href="/" className="inline-link">
                  #84690527
                </a>
              </div>
              <div className="statistics-item">
                <span>Close time</span>
                <span>7:43:02 AM</span>
              </div>
              <div className="statistics-item">
                <span>Transactions</span>
                <span>37(12.33txs/s)</span>
              </div>
              <div className="statistics-item">
                <span>Validation quorum</span>
                <span>
                  28(
                  <a href="/" className="inline-link">
                    35 proposers
                  </a>
                  )
                </span>
              </div>
              <div className="statistics-item">
                <span>Accounts</span>
                <span>4,919,355</span>
              </div>
              <div className="statistics-item">
                <span>Usernames</span>
                <span>132,906</span>
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{
                border: "1px solid #A9A9A9",
                width: "100%",
                margin: "10px 0px",
                padding: "15px 20px",
                overflowX: "auto",
              }}
            >
              <span className="statistics-item">
                <span>NFT minted</span>
                <span>5,117,163</span>
              </span>
              <span className="statistics-item">
                <span>NFT burned</span>
                <span>370,731</span>
              </span>
              <span className="statistics-item">
                <span>NFT issuers</span>
                <span>
                  <a href="/" className="inline-link">
                    6,073
                  </a>
                </span>
              </span>
              <span className="statistics-item">
                <span>Current owners</span>
                <span>31,887</span>
              </span>
              <span className="statistics-item">
                <span>NFT transfers</span>
                <span>1,516,682</span>
              </span>
              <span className="statistics-item">
                <span>NFTs for sale</span>
                <span>61,206</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
