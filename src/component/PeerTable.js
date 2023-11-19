// src/components/PeerTable.js
import React, { useState, useEffect } from 'react';

const PeerTable = () => {
  const [peers, setPeers] = useState([]);

  useEffect(() => {
    const fetchPeers = () => {
      fetch('https://ad81-188-43-253-75.ngrok-free.app/peerinfo')
        .then(response => response.json())
        .then(data => setPeers(data))
        .catch(error => console.error('Error fetching data:', error));
    };

    // Fetch data immediately and then set up the interval
    fetchPeers();
    const intervalId = setInterval(fetchPeers, 1000); // Fetch data every second (1000 milliseconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mt-5 w-100">
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
          {peers.map(peer => (
            <tr key={peer.pubkey}>
              <td>{peer.pubkey}</td>
              <td>{peer.country}</td>
              <td>{peer.version}</td>
              <td>{peer.serverState}</td>
              <td>{peer.direction}</td>
              <td>{peer.latency}</td>
              <td>{peer.ledgers || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeerTable;
