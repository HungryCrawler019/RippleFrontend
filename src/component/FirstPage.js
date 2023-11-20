import React, { useState, useEffect } from "react";
import PeerTable from "./PeerTable";
import ServerStateTable from "./ServerStateTable";
import Header from "./Header/";

const FirstPage = () => {
  return (
    <div className="App">
      <Header />
      <ServerStateTable />
      <PeerTable />
    </div>
  );
}

export default FirstPage;