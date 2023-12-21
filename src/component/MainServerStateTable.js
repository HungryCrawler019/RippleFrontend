// src/components/ServerStateTable.js
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react"; // Import the Lottie component
import ledgerIndexLottie from "../images/system-regular-76-newspaper.svg";
import ledgerIntervalLottie from "../images/system-regular-162-update.svg";
import closingTimeLottie from "../images/system-regular-67-clock.svg";
import TPSLottie from "../images/system-regular-33-speed.svg";
import TransactionLottie from "../images/system-regular-35-compare.svg";
import quorumLottie from "../images/system-regular-96-groups.svg";
import proposersLottie from "../images/system-regular-156-thumbs-up-down.svg";

import offlineAnimationData from "../images/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "../images/wired-flat-64-wifi-online.json";
import statisticsTitleLottie from "../images/wired-flat-1307-hub-network.json";
import clusterTitleLottie from "../images/wired-flat-1309-load-balancer_1.json";
import moment from "moment";

const MainServerStateTable = () => {
  const [servers, setServers] = useState([]);
  const [statistics, setStatistics] = useState({
    ledgerIndex: 0,
    closeTime: new Date(),
    TPS: 0,
    txCount : 0,
    quorum : 0,
    proposers : 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:8001/serverstates")
        .then((response) => response.json())
        .then((data) => setServers(data))
        .catch((error) => {
          setServers([]);
          console.error("Error fetching data:", error);
        });
      fetch("http://localhost:8001/statistics")
        .then((response) => response.json())
        .then((data) => setStatistics(data))
        .catch((error) => {
          setStatistics({
            ledgerIndex: 0,
            closeTime: new Date(),
            TPS: 0,
            txCount : 0,
            quorum : 0,
            proposers : 0
          });
          console.error("Error fetching data:", error);
        });
    }, 5000); // 1000ms = 1 second

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
          borderRadius: "6px",
          padding: "15px 48px",
        }}
      >
        <div className="title d-flex flex-column justify-content-center align-items-center">
          <Lottie
            animationData={statisticsTitleLottie}
            loop={true}
            autoplay={true}
            style={{ width: 75, height: 75, margin: "0 auto" }}
          />
          <h4 className="p-4">XRPL Live Statistics</h4>
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
            <img
              src={ledgerIndexLottie}
              style={{ width: 35, height: 35, margin: "0 auto" }}
              alt="ledgerIndexLottie"
            />
            <span className="fw-bold text-nowrap">Ledger index</span>
            <a href="/" className="inline-link">
              #{statistics.ledgerIndex}
            </a>
          </div>
          <div className="statistics-item">
            <img
              src={closingTimeLottie}
              style={{ width: 35, height: 35, margin: "0 auto" }}
              alt="ledgerIndexLottie"
            />
            <span className="fw-bold text-nowrap">Close time</span>
            <span className="text-nowrap">{moment(statistics.closeTime).format("hh:mm:ss A")}</span>
          </div>
          <div className="statistics-item">
            <img
              src={TPSLottie}
              style={{ width: 35, height: 35, margin: "0 auto" }}
              alt="ledgerIndexLottie"
            />
            <span className="fw-bold text-nowrap">TPS</span>
            <span>{Math.round(statistics.TPS)}txs/s</span>
          </div>
          <div className="statistics-item">
            <img
              src={TransactionLottie}
              style={{ width: 35, height: 35, margin: "0 auto" }}
              alt="ledgerIndexLottie"
            />
            <span className="fw-bold text-nowrap">Transaction</span>
            <span>
              <span>
                {statistics.txCount}
              </span>
            </span>
          </div>
          <div className="statistics-item">
            <img
              src={quorumLottie}
              style={{ width: 35, height: 35, margin: "0 auto" }}
              alt="ledgerIndexLottie"
            />
            <span className="fw-bold text-nowrap">Quorum</span>
            <span>
              <span>
                {statistics.quorum}
              </span>
            </span>
          </div>
          <div className="statistics-item">
            <img
              src={proposersLottie}
              style={{ width: 35, height: 35, margin: "0 auto" }}
              alt="ledgerIndexLottie"
            />
            <span className="fw-bold text-nowrap">Proposers</span>
            <span>
              <span>
                {statistics.proposers}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="card py-2 mt-5 shadow-sm"
        style={{
          background: "rgb(13,23,33)",
          color: "rgb(200, 200, 205)",
          border: "none",
          borderRadius: "6px",
        }}
      >
        <Lottie
          animationData={clusterTitleLottie}
          loop={true}
          autoplay={true}
          style={{ width: 75, height: 75, margin: "0 auto" }}
        />
        <h4 className="p-3 text-center text-white">
          XRP Kuwait cluster status
        </h4>
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
                servers.map((peer, index) =>
                  peer === "-" ? (
                    <>
                      <tr key={`Node ${index + 1}`}>
                        <td>{`Node ${index + 1}`}</td>
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
                  ) : (
                    <>
                      <tr key={peer.Node}>
                        <td>Node {index + 1}</td>
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
                  )
                )
              ) : (
                <>
                  <tr key="Node 1">
                    <td>Node 1</td>
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
