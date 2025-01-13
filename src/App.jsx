import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
// import styles from "./styles/Home.module.css";
// import Quiz from "./components/Quiz.jsx";
// import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
