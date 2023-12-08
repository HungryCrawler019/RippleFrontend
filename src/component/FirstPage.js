import React, { useState, useEffect } from "react";
import PeerTable from "./PeerTable";
import ServerStateTable from "./ServerStateTable";
import Header from "./Header/";
import Footer from "./Footer";

const FirstPage = () => {
  return (
    <div className="App">
      <Header isSticky={true} />
      <ServerStateTable />
      <PeerTable />
      <Footer />
    </div>
  );
};

export default FirstPage;