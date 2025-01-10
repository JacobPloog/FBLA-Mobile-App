import styles from "../styles/Navbar.module.css";
import Icon1 from "./Icon1"

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Icon1/>
      <p>This a navbar</p>
    </div>
  );
}
