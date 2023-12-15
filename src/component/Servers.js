import React, { useState, useEffect } from "react";

import server from "../images/wired-lineal-58-servers.gif";
import connection from "../images/wired-lineal-59-server-connection.gif";
const ServersPage = () => {
  return (
    <div className="">
      <div className="body_box">
        <div className="container">
          <div className="row">
            <div className="column home-content servers-page">
              <div className="servers-contnet">
                <div className="we-are-running">
                  <h3>
                    <img src={server} width="60" height="60" /> We are running:{" "}
                  </h3>
                  <ul>
                    <li>- Validator node / Stock server / Public hub </li>
                    <li>- One-year ledger history node </li>
                  </ul>
                </div>
                <div className="we-are-running" style={{"padding-bottom": "100px"}}>
                  <h3>
                    <img src={connection} width="60" height="60" /> Our servers
                    are running on:{" "}
                  </h3>
                  <ul>
                    <li>
                      {" "}
                      <span className="blue-color">
                        * Validator node / Stock server / Public hub:
                      </span>
                      <ul className="servers_inner">
                        <li>CPU = AMD Ryzen™ 9 (16-Cores, 32-Threads)</li>
                        <li>RAM = 128GB - DDR5 - 4800MHz</li>
                        <li>
                          Storage = Samsung 990 PRO Series 2TB PCIe Gen4. X4
                          NVMe
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <span className="blue-color">
                        * One-year ledger history node:
                      </span>
                      <ul className="servers_inner">
                        <li>CPU = AMD Ryzen™ 9 (16-Cores, 32-Threads)</li>
                        <li>RAM = 128GB - DDR5 - 4800MHz</li>
                        <li>
                          Storage = Samsung 990 PRO Series 8TB PCIeGen4. X4 NVMe
                        </li>
                      </ul>
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

export default ServersPage;
