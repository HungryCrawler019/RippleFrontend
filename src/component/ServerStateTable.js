// src/components/ServerStateTable.js
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react"; // Import the Lottie component

import offlineAnimationData from "../images/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "../images/wired-flat-64-wifi-online.json";
import serverStateTitle from "../images/wired-flat-952-business-network.json";

const ServerStateTable = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:8001/serverstate")
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
    <div className="container">
      <div
        className="card mt-5 py-2 shadow-sm"
        style={{
          background: "rgb(13,23,33)",
          color: "rgb(200, 200, 205)",
          border: "none",
        }}
      >
        <Lottie
          animationData={serverStateTitle}
          loop={true}
          autoplay={true}
          style={{ width: 75, height: 75, margin: "0 auto" }}
        />
        <h3 className="p-3">Server State Information</h3>
        <div className="container" style={{ overflowX: "auto" }}>
          <table className="table table-rounded">
            <thead>
              <tr>
                <th>Node</th>
                <th>Pubkey</th>
                <th>Ledger Index </th>
                <th>Uptime</th>
                <th>Proposers</th>
                <th>Quorum</th>
                <th>Version</th>
                <th>Peers</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {servers.length ? (
                servers.map((peer) => (
                  <tr key={peer.Node}>
                    <td>{peer.node}</td>
                    <td>{`${peer.pubkey.substring(
                      0,
                      31
                    )} ${peer.pubkey.substring(32)}`}</td>
                    <td>{peer.ledger_Index}</td>
                    <td>{peer.uptime}</td>
                    <td>{peer.proposers}</td>
                    <td>{peer.quorum}</td>
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
                ))
              ) : (
                <tr key="XRPKuwait HUB">
                  <td>XRPKuwait HUB</td>
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
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServerStateTable;
