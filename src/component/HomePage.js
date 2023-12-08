import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

// const HomePage = () => {
//   window.location.href = "./html/index.html";
//   return;
// };

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <main>
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
                      <div className="xrpl-content"> a </div>
                      <div className="text"></div>
                    </div>
                  </div>
                  <div className="home-widget">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default HomePage;
