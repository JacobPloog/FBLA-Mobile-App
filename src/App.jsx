// src/App.jsx
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import styles from "./styles/Home.module.css";

import "./App.css";
export default function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <p className={styles.text}>
          This is the body
        </p>
        <Navbar />
      </div>
    </>
  );
}
