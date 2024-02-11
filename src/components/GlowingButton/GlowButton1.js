import React, { useEffect } from "react";
import styles from "./GlowButton1.module.css";
const GlowButton1 = () => {
  const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--xp", xp);
    document.documentElement.style.setProperty("--y", y);
    document.documentElement.style.setProperty("--yp", yp);
  };
  useEffect(() => {
    document.body.addEventListener("pointermove", syncPointer);

    // Important cleanup function for the event listener!
    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);
  return (
    <div className={styles.controls}>
      <button className={styles.button}>
        <span>Button</span>
      </button>
      <button className={styles.button}>
        <span>Button</span>
      </button>
      <button className={styles.button}>
        <span>Button</span>
      </button>
    </div>
  );
};

export default GlowButton1;
