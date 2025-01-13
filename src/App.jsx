import { Router, Routes, Route } from "react-router-dom";
import styles from "./styles/Home.module.css";
import Quiz from "./components/Quiz.jsx";

import "./App.css";
export default function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleBg}>
          <p className={styles.title}>Math</p>
        </div>
        <p className={styles.subjects}>
          <Router>
            <Routes>
              <button className={styles.test}></button>
              <button className={styles.quiz}>Quiz 1</button>
              <button className={styles.quiz}>Quiz 1</button>
            </Routes>
          </Router>
        </p>
        <div className={styles.titleBg}>
          <p className={styles.title}>English</p>
        </div>
        <p className={styles.subjects}>
          <Router>
            <Routes>
              <button className={styles.test}>Test 1</button>
              <button className={styles.quiz}>Quiz 1</button>
              <button className={styles.quiz}>Quiz 1</button>
            </Routes>
          </Router>
        </p>
      </div>
    </>
  );
}
