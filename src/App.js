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
import IntroPage from "./component/IntroPage";
import LocationPage from "./component/LocationPage";
import AboutPage from "./component/AboutPage";
import ContactPage from "./component/ContactPage";
import ServersPage from "./component/Servers";
import NotFoundPage from "./component/404NotFoundPage";
import Layout from "./component/Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index exact path="/" element={<IntroPage />} />
          <Route path="/mainpage" element={<HomePage />} />

          <Route path="/hub" element={<FirstPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/servers" element={<ServersPage />} />
        <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
