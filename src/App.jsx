// // src/App.jsx
// import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
import styles from "./styles/Home.module.css";

import "./App.css";
export default function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Math</p>
        <p className={styles.buttons}>
          <button className={styles.test}>Test 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
          <button>Quiz 1</button>
        </p>
      </div>
    </>
  );
}
