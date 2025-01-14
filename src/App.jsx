import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Quiz from "./components/Quiz.jsx";

import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
