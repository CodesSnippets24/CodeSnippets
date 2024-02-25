import React, { useEffect } from "react";
import styles from "./RandomColor.module.css";
import { TypeAnimation } from "react-type-animation";
const RandomColor = () => {
  useEffect(() => {
    const colorBox = document.getElementById("color-box");
    function changeColor() {
      const r = Math.floor(Math.random() * 256); // Random red value (0-255)
      const g = Math.floor(Math.random() * 256); // Random green value (0-255)
      const b = Math.floor(Math.random() * 256); // Random blue value (0-255)

      colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    let interval;
    const timeOut = setTimeout(() => {
      interval = setInterval(changeColor, 1000);
    }, 10000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      <div id="color-box" className={styles.random}>
        RandomColor
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.circle}></div>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <p>Scale Property</p>
        </div>
        <div className={styles.body}>
          <TypeAnimation
            sequence={[
              "document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;",
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "1.3em",
              fontWeight: 500,
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
};

export default RandomColor;
