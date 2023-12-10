import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FirstPage from "./component/FirstPage";
import HomePage from "./component/HomePage";
import LocationPage from "./component/LocationPage";
import AboutPage from "./component/AboutPage";
import ContactPage from "./component/ContactPage";
import ServersPage from "./component/Servers";
import Layout from "./component/Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />

          <Route path="/hub" element={<FirstPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/servers" element={<ServersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
