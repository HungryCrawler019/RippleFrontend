import React, { useState, useEffect } from "react";
import PeerTable from "./PeerTable";
import ServerStateTable from "./ServerStateTable";

const FirstPage = () => {
  return (
    <div>
      <ServerStateTable />
      <PeerTable />
    </div>
  );
};

export default FirstPage;