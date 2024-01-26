import styles from "./MenuIconAnimation.module.css";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <div className={styles.center}>
          <div
            className={`${styles.menuIcon} ${click && styles.active}`}
            onClick={() => {
              setClick(!click);
              setFirstClick(true);
            }}
          >
            <div
              className={`${styles.line1} ${
                firstClick ? "" : styles.noAnimation
              }`}
            />
            <div
              className={`${styles.line2} ${
                firstClick ? "" : styles.noAnimation
              }`}
            />
            <div
              className={`${styles.line3} ${
                firstClick ? "" : styles.noAnimation
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
