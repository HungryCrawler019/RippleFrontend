// src/components/ServerStateTable.js
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react"; // Import the Lottie component
import ledgerIndexLottie from "../images/wired-flat-1443-index.json";
import ledgerIntervalLottie from "../images/wired-flat-46-timer-stopwatch.json";
import closingTimeLottie from "../images/wired-flat-45-clock-time.json";
import TPSLottie from "../images/wired-flat-467-dashboard-gauge.json";

import offlineAnimationData from "../images/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "../images/wired-flat-64-wifi-online.json";
import serverStateTitle from "../images/wired-lineal-1309-load-balancer.json";

const MainServerStateTable = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("https://xrpkuwait.com/serverstate")
        .then((response) => response.json())
        .then((data) => setServers(data))
        .catch((error) => {
          setServers([]);
          console.error("Error fetching data:", error);
        });
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Style for the table cell that will center the content
  const centeredCellStyle = {
    textAlign: "center",
    verticalAlign: "middle",
  };

  return (
    <div className="mx-5 my-5">
      <div
        style={{
          background: "rgb(13, 23, 33)",
          paddingTop: "15px",
          borderRadius: "6px 6px 0px 0px",
          padding: "15px 48px",
        }}
      >
        <div className="title d-flex flex-column justify-content-center align-items-center">
          <Lottie
            animationData={serverStateTitle}
            loop={true}
            autoplay={true}
            style={{ width: 75, height: 75, margin: "0 auto" }}
          />
          <h4>XRPL stats</h4>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            width: "100%",
            padding: "15px 20px",
            overflowX: "auto",
          }}
        >
          <div className="statistics-item">
            <Lottie
              animationData={ledgerIndexLottie}
              loop={true}
              autoplay={true}
              style={{ width: 50, height: 50, margin: "0 auto" }}
            />
            <span className="fw-bold text-nowrap">Ledger index</span>
            <a href="/" className="inline-link">
              #84690527
            </a>
          </div>
          <div className="statistics-item">
            <Lottie
              animationData={closingTimeLottie}
              loop={true}
              autoplay={true}
              style={{ width: 50, height: 50, margin: "0 auto" }}
            />
            <span className="fw-bold text-nowrap">Close time</span>
            <span>7:43:02 AM</span>
          </div>
          <div className="statistics-item">
            <Lottie
              animationData={TPSLottie}
              loop={true}
              autoplay={true}
              style={{ width: 50, height: 50, margin: "0 auto" }}
            />
            <span className="fw-bold text-nowrap">TPS</span>
            <span>37(12.33txs/s)</span>
          </div>
          <div className="statistics-item">
            <Lottie
              animationData={ledgerIntervalLottie}
              loop={true}
              autoplay={true}
              style={{ width: 50, height: 50, margin: "0 auto" }}
            />
            <span className="fw-bold text-nowrap">AVG Ledger Interval</span>
            <span>
              28(
              <a href="/" className="inline-link">
                35 proposers
              </a>
              )
            </span>
          </div>
        </div>
      </div>
      <div
        className="card py-2 shadow-sm"
        style={{
          background: "rgb(13,23,33)",
          color: "rgb(200, 200, 205)",
          border: "none",
          borderRadius: "0px 0px 6px 6px",
        }}
      >
        <Lottie
          animationData={serverStateTitle}
          loop={true}
          autoplay={true}
          style={{ width: 75, height: 75, margin: "0 auto" }}
        />
        <h4 className="p-3 text-center text-white">Cluster stats</h4>
        <div className="mx-5" style={{ overflowX: "auto" }}>
          <table
            className="table table-rounded"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Node</th>
                <th>Pubkey</th>
                <th className="no-wrap">Ledger Index </th>
                <th>Uptime</th>
                <th>Version</th>
                <th>Peers</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {servers.length ? (
                servers.map((peer) => (
                  <>
                    <tr key="Node 1">
                      <td>Node 1</td>
                      <td>{peer.pubkey}</td>
                      <td>{peer.ledger_Index}</td>
                      <td>{peer.uptime}</td>
                      <td>{peer.version}</td>
                      <td>{peer.peers}</td>
                      <td style={centeredCellStyle}>
                        <Lottie
                          animationData={onlineAnimationData}
                          loop={true}
                          autoplay={true}
                          style={{ width: 30, height: 30, margin: "0 auto" }}
                        />
                      </td>
                    </tr>
                    <tr key={peer.Node}>
                      <td>Node 2</td>
                      <td>{peer.pubkey}</td>
                      <td>{peer.ledger_Index}</td>
                      <td>{peer.uptime}</td>
                      <td>{peer.version}</td>
                      <td>{peer.peers}</td>
                      <td style={centeredCellStyle}>
                        <Lottie
                          animationData={onlineAnimationData}
                          loop={true}
                          autoplay={true}
                          style={{ width: 30, height: 30, margin: "0 auto" }}
                        />
                      </td>
                    </tr>
                    <tr key={peer.Node}>
                      <td>Node 3</td>
                      <td>{peer.pubkey}</td>
                      <td>{peer.ledger_Index}</td>
                      <td>{peer.uptime}</td>
                      <td>{peer.version}</td>
                      <td>{peer.peers}</td>
                      <td style={centeredCellStyle}>
                        <Lottie
                          animationData={onlineAnimationData}
                          loop={true}
                          autoplay={true}
                          style={{ width: 30, height: 30, margin: "0 auto" }}
                        />
                      </td>
                    </tr>
                    <tr key={peer.Node}>
                      <td>Node 4</td>
                      <td>{peer.pubkey}</td>
                      <td>{peer.ledger_Index}</td>
                      <td>{peer.uptime}</td>
                      <td>{peer.version}</td>
                      <td>{peer.peers}</td>
                      <td style={centeredCellStyle}>
                        <Lottie
                          animationData={onlineAnimationData}
                          loop={true}
                          autoplay={true}
                          style={{ width: 30, height: 30, margin: "0 auto" }}
                        />
                      </td>
                    </tr>
                  </>
                ))
              ) : (
                <>
                  <tr key="Node 1">
                    <td>Node 1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td class={centeredCellStyle}>
                      <Lottie
                        animationData={offlineAnimationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 30, height: 30, margin: "0 auto" }}
                      />
                    </td>
                  </tr>
                  <tr key="Node 2">
                    <td>Node 2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td class={centeredCellStyle}>
                      <Lottie
                        animationData={offlineAnimationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 30, height: 30, margin: "0 auto" }}
                      />
                    </td>
                  </tr>
                  <tr key="Node 3">
                    <td>Node 3</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td class={centeredCellStyle}>
                      <Lottie
                        animationData={offlineAnimationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 30, height: 30, margin: "0 auto" }}
                      />
                    </td>
                  </tr>
                  <tr key="Node 4">
                    <td>Node 4</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td class={centeredCellStyle}>
                      <Lottie
                        animationData={offlineAnimationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 30, height: 30, margin: "0 auto" }}
                      />
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainServerStateTable;
