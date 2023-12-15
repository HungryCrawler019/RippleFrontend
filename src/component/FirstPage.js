import React, { useState, useEffect } from "react";
import PeerTable from "./PeerTable";
import ServerStateTable from "./ServerStateTable";
import { Helmet } from "react-helmet";

const FirstPage = () => {
  return (
    <div>
      <ServerStateTable />
      <PeerTable />
    </div>
  );
};

export default FirstPage;