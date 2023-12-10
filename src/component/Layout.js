import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHubRoute = location.pathname === "/hub";

  return (
    <div className="App">
      <Header isSticky={isHubRoute} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
