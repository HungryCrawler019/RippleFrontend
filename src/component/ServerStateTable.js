// src/components/ServerStateTable.js
import React, { useState, useEffect } from "react";

const ServerStateTable = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:8001/serverstate")
        .then((response) => response.json())
        .then((data) => setServers(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="container mt-5">
      <h2>Server State Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Ledger Index </th>
            <th>Peers</th>
            <th>Pubkey</th>
            <th>Uptime (secs) </th>
            <th>Proposers</th>
            <th>Quorum</th>
            <th>Version</th>
            <th>Node</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((peer) => (
            <tr key={peer.Node}>
              <td>{peer.ledger_Index}</td>
              <td>{peer.peers}</td>
              <td>{peer.pubkey}</td>
              <td>{peer.uptime}</td>
              <td>{peer.proposers}</td>
              <td>{peer.quorum}</td>
              <td>{peer.version}</td>
              <td>{peer.node}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServerStateTable;
