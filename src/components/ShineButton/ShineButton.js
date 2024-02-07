import React, { useRef, useEffect } from "react";
import styles from "./ShineButton.module.css";
const ShineButton = () => {
  const glowRef = useRef(null);
  const glowRef1 = useRef(null);
  const glowRef2 = useRef(null);
  useEffect(() => {
    if (glowRef) {
      glowRef.current.addEventListener("mousemove", (e) => {
        const { x, y } = glowRef.current.getBoundingClientRect();
        glowRef.current.style.setProperty("--x", e.clientX - x);
        glowRef.current.style.setProperty("--y", e.clientY - y);
      });
      glowRef1.current.addEventListener("mousemove", (e) => {
        const { x, y } = glowRef1.current.getBoundingClientRect();
        glowRef1.current.style.setProperty("--x", e.clientX - x);
        glowRef1.current.style.setProperty("--y", e.clientY - y);
      });
      glowRef2.current.addEventListener("mousemove", (e) => {
        const { x, y } = glowRef2.current.getBoundingClientRect();
        glowRef2.current.style.setProperty("--x", e.clientX - x);
        glowRef2.current.style.setProperty("--y", e.clientY - y);
      });
    }
  });
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.shiny} ${styles.second}`}
        id="btn"
        ref={glowRef}
      >
        Hover Me
      </button>
      <button className={styles.shiny} id="btn1" ref={glowRef1}>
        Hover Me
      </button>

      <button
        className={`${styles.shiny} ${styles.third}`}
        id="btn2"
        ref={glowRef2}
      >
        Hover Me
      </button>
    </div>
  );
};

export default ShineButton;
