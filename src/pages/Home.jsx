import React from "react";
import styles from "../styles/Home.module.css";
import Logo from "../Logo.jsx";
import Mascot from "../Mascot.jsx";
import { useNavigate, Link } from "react-router-dom";
// import Img1 from "./Img1.png";

export default function Home() {
  const navigate = useNavigate();
  const quizButton = () => {
    navigate("/quiz/math");
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
          <Mascot />
        </div>
        <div className={styles.titleBg}>
          <p className={styles.title}>Math</p>
          <p className={styles.progress}>
            Progress: <input type="range" min="0" max="3" />
          </p>
        </div>
        <p className={styles.subjects}>
          <button className={styles.test}>Test 1</button>
          <div className={styles.quizWrapper}>
            <button className={styles.mathQuizButton}></button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
              <Link to="/quiz/math"><button className={styles.mathQuizButton}></button></Link>
            <p>Quiz 1</p>
          </div>
        </p>
        <div className={styles.titleBg}>
          <p className={styles.title}>English</p>
          <p className={styles.progress}>
            Progress: <input type="range" min="0" max="3" />
          </p>
        </div>
        <p className={styles.subjects}>
          <button className={styles.test}>Test 1</button>
          <div className={styles.quizWrapper}>
            <button className={styles.engQuizButton}></button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
            <button className={styles.engQuizButton}></button>
            <p>Quiz 1</p>
          </div>
        </p>
        <div className={styles.titleBg}>
          <p className={styles.title}>History</p>
          <p className={styles.progress}>
            Progress: <input type="range" min="0" max="3" />
          </p>
        </div>
        <p className={styles.subjects}>
          <button className={styles.test}>Test 1</button>
          <div className={styles.quizWrapper}>
            <button className={styles.hisQuizButton}></button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
            <button className={styles.hisQuizButton}></button>
            <p>Quiz 1</p>
          </div>
        </p>
        <div className={styles.titleBg}>
          <p className={styles.title}>Science</p>
          <p className={styles.progress}>
            Progress: <input type="range" min="0" max="3" />
          </p>
        </div>
        <p className={styles.subjects}>
          <button className={styles.test}>Test 1</button>
          <div className={styles.quizWrapper}>
            <button className={styles.sciQuizButton}></button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
            <button className={styles.sciQuizButton}></button>
            <p>Quiz 1</p>
          </div>
        </p>
      </div>
    </>
  );
}
