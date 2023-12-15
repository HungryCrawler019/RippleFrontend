// src/components/PeerTable.js
import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import Lottie from "lottie-react"; // Import the Lottie component

import inboundState from "../images/wired-outline-33-arrow-down.json";
import outboundState from "../images/wired-outline-34-arrow-up.json";

const PeerTable = () => {
  const [peers, setPeers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("https://xrpkuwait.com/peerinfo")
        .then((response) => response.json())
        .then((data) => setPeers(data))
        .catch((error) => {
          setPeers([]);
          console.error("Error fetching data:", error);
        });
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="mx-5 mt-5" style={{ "marginBottom": "100px" }}>
      <div
        className="card mt-5 py-4 shadow-sm"
        style={{
          background: "rgb(13,23,33)",
          color: "rgb(200, 200, 205)",
          border: "none",
        }}
      >
        <h3 className="p-3 text-center">Peer Information</h3>
        <div className="mx-5" style={{ overflowX: "auto" }}>
          <table className="table table-rounded" style={{ "textAlign": "center" }}>
            <thead>
              <tr>
                <th>Public Key</th>
                <th>Country</th>
                <th>Version</th>
                <th className="no-wrap">Server State</th>
                <th>Direction</th>
                <th>Latency</th>
                <th>Ledgers</th>
              </tr>
            </thead>
            <tbody>
              {peers.map((peer) => (
                <tr key={peer.pubkey}>
                  <td>{peer.pubkey}</td>
                  <td>
                    <ReactCountryFlag
                      countryCode={peer.country}
                      svg
                      title={peer.country}
                      style={{ width: 30, height: 30 }}
                    />
                  </td>
                  <td>{peer.version}</td>
                  <td><span className={`badge rounded-pill server-state-${peer.serverState}`}
                    style={{
                      padding: "7px 15px",
                      color: "black"
                    }}>{peer.serverState}</span></td>
                  <td>
                    {peer.direction == "inbound" ? (
                      <Lottie
                        animationData={inboundState}
                        loop={true}
                        autoplay={true}
                        style={{ width: 30, height: 30, margin: "0 auto" }}
                      />
                    ) : (
                      <Lottie
                        animationData={outboundState}
                        loop={true}
                        autoplay={true}
                        style={{ width: 30, height: 30, margin: "0 auto" }}
                      />
                    )}
                  </td>
                  <td>{peer.latency}</td>
                  <td>{peer.ledgers || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PeerTable;
