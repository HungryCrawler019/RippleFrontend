import React, { useState, useEffect } from "react";

import Header from "./Header";
import vet from "../images/9x00d_tN_400x400.jpeg";
import rabit from "../images/TBI_4pdH_400x400.jpeg";
import Footer from "./Footer";
const AboutPage = () => {
  return (
    <div className="">
      <Header />

      <main>
        <div className="body_box about-us_main">
          <div className="container">
            <div className="row">
              <div className="column home-content about-page">
                <div className="servers-contnet">
                  <h1>About </h1>
                  <div className="location_inner about_us">
                    <p>
                      XRP Kuwait is currently running 4 cluster rippled servers,
                      running on a validator / ledger history mode along side
                      150+ other validators / 700+ ledger history nodes. All
                      validators come to an agreement on orders and the outcome
                      of XRP transactions every{" "}
                      <div id="countdown-element" className="text"></div>{" "}
                      seconds.
                    </p>
                    <p className="proudly_seection">
                      Proudly inspired by{" "}
                      <a
                        href="https://twitter.com/vet_x0?s=21&t=ILDaEwSewvUv0gqG-RqAtA"
                        target="_blank"
                      >
                        {" "}
                        Vet <img src={vet} width="30" height="30" />
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://twitter.com/xrpl_rabbit?s=21&t=ILDaEwSewvUv0gqG-RqAtA"
                        target="_blank"
                      >
                        Rabbit <img src={rabit} width="30" height="30" />
                      </a>
                    </p>
                    <p className="toml_link blue-color">
                      Check .TOML File here -{" "}
                      <a
                        href="https://xrptools.alloy.ee/checktoml?domain=xrpkuwait.com&display=html"
                        target="_blank"
                      >
                        https://xrptools.alloy.ee/checktoml?domain=xrpkuwait.com&display=html
                      </a>
                    </p>
                    <h3 className="resouces_title">Links / Resources:</h3>
                    <ul className="links_resousrces">
                      <li>
                        XRPLedger -{" "}
                        <a href="https://xrpl.org/index.html" target="_blank">
                          https://xrpl.org/index.html
                        </a>
                      </li>
                      <li>
                        XRPLedger Explorer -{" "}
                        <a href="https://livenet.xrpl.org" target="_blank">
                          https://livenet.xrpl.org
                        </a>
                      </li>
                      <li>
                        XRPScan -{" "}
                        <a href="https://xrpscan.com" target="_blank">
                          https://xrpscan.com
                        </a>
                      </li>
                      <li>
                        Bithomp -{" "}
                        <a href="https://bithomp.com" target="_blank">
                          https://bithomp.com
                        </a>
                      </li>
                      <li>
                        Xumm - XRP Wallet -{" "}
                        <a href="https://xumm.app" target="_blank">
                          https://xumm.app
                        </a>
                      </li>
                      <li>
                        Rabbit Guide -{" "}
                        <a href="https://rabbitkick.club" target="_blank">
                          https://rabbitkick.club
                        </a>
                      </li>
                      <li>
                        XRP Cafe NFT Market Place -{" "}
                        <a href="https://xrp.cafe" target="_blank">
                          https://xrp.cafe
                        </a>
                      </li>
                      <li>
                        Zaphod pool status -{" "}
                        <a href="https://zstats.alloy.ee" target="_blank">
                          https://zstats.alloy.ee
                        </a>
                      </li>
                      <li>
                        XRP toolkit -{" "}
                        <a href="https://www.xrptoolkit.com" target="_blank">
                          https://www.xrptoolkit.com
                        </a>
                      </li>
                      <li>
                        XRP ledger full history cluster -{" "}
                        <a href="https://xrplcluster.com" target="_blank">
                          https://xrplcluster.com
                        </a>
                      </li>
                      <li>
                        Three XRP -{" "}
                        <a href="https://threexrp.dev" target="_blank">
                          https://threexrp.dev
                        </a>
                      </li>
                      <li>
                        xSpectar -{" "}
                        <a href="https://www.xspectar.com" target="_blank">
                          https://xspectar.com
                        </a>
                      </li>
                    </ul>
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

export default AboutPage;
