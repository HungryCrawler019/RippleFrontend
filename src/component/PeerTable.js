// src/components/PeerTable.js
import React, { useState, useEffect } from "react";

const PeerTable = () => {
  const [peers, setPeers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:8001/peerinfo")
        .then((response) => response.json())
        .then((data) => setPeers(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="container mt-5">
      <h2>Peer Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Public Key</th>
            <th>Country</th>
            <th>Version</th>
            <th>Server State</th>
            <th>Direction</th>
            <th>Latency</th>
            <th>Ledgers</th>
          </tr>
        </thead>
        <tbody>
          {peers.map((peer) => (
            <tr key={peer.pubkey}>
              <td>{peer.pubkey}</td>
              <td>{peer.country}</td>
              <td>{peer.version}</td>
              <td>{peer.serverState}</td>
              <td>{peer.direction}</td>
              <td>{peer.latency}</td>
              <td>{peer.ledgers || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeerTable;
