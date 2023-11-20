import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FirstPage from "./component/FirstPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hub" element={<FirstPage />} />
        <Route path="/" element={<FirstPage />} />
        {/* <Route path="/" element={<Navigate replace to="/main.html" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
