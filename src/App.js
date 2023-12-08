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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hub" element={<FirstPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/servers" element={<ServersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
