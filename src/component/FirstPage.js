import React, { useState, useEffect } from "react";
import PeerTable from "./PeerTable";
import ServerStateTable from "./ServerStateTable";
import { Helmet } from "react-helmet";

const FirstPage = () => {
  return (
    <div>
      <Helmet>
        <title>Xrp Kuwait Public Hub</title>
        <meta name="description" content="Xrp Kuwait Public Hub" />
      </Helmet>
      <ServerStateTable />
      <PeerTable />
    </div>
  );
};

export default FirstPage;