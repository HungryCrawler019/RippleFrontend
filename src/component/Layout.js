import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHubRoute = location.pathname === "/hub";
  const isRoot = location.pathname === "/";

  return (
    <div className="App">
      {!isRoot && <Header isSticky={isHubRoute} />}
      <main>
        <Outlet />
      </main>
      {!isRoot && <Footer />}
    </div>
  );
};

export default Layout;
