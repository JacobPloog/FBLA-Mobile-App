// import { Router, Routes, Route } from "react-router-dom";
import React from "react";
import styles from "../styles/Home.module.css";
import Logo from "../Logo.jsx";
import Mascot from "../Mascot.jsx";

// import "./App.css";
export default function Home() {
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
            <button className={styles.quizButton}>Quiz 1</button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
            <button className={styles.quizButton}>Quiz 1</button>
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
            <button className={styles.quizButton}>Quiz 1</button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
            <button className={styles.quizButton}>Quiz 1</button>
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
            <button className={styles.quizButton}>Quiz 1</button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
            <button className={styles.quizButton}>Quiz 1</button>
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
            <button className={styles.quizButton}>Quiz 1</button>
            <p>Quiz 1</p>
          </div>
          <div className={styles.quizWrapper}>
            <button className={styles.quizButton}>Quiz 1</button>
            <p>Quiz 1</p>
          </div>
        </p>
      </div>
    </>
  );
}
