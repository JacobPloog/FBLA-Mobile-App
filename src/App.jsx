// // src/App.jsx
// import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
import styles from "./styles/Home.module.css";

import "./App.css";
export default function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleBg}>
          <p className={styles.title}>Math</p>
        </div>
        <p className={styles.subjects}>
          <button className={styles.test}>Test 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
        </p>
        <p className={styles.subjects}>
          <button className={styles.test}>Test 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
        </p>
      </div>
    </>
  );
}
