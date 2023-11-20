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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hub" element={<FirstPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
