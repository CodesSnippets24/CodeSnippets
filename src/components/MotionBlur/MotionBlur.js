import React, { useState, useEffect } from "react";
import styles from "./MotionBlur.module.css";

const MotionBlur = () => {
  const getRandomColor = () =>
    `rgb(${Math.floor(Math.random() * 5000)}, ${Math.floor(
      Math.random() * 9000
    )}, ${Math.floor(Math.random() * 3000)})`;

  const [color, setColor] = useState(getRandomColor());

  const boxStyle = {
    background: color,
  };

  useEffect(() => {
    const handleAnimationIteration = () => {
      // Ensure setColor is called once per animation iterations
      setColor(getRandomColor());
      console.log(color);
    };

    const boxElement = document.querySelector(`.${styles.box}`);

    // Add event listener for animation iteration
    boxElement.addEventListener("animationiteration", handleAnimationIteration);

    // Cleanup: Remove event listener on component unmount
    return () => {
      boxElement.removeEventListener(
        "animationiteration",
        handleAnimationIteration
      );
    };
  }, [color]); // Re-run effect when color changes

  return (
    <div className={styles.motionBlur}>
      <div className={styles.box} style={boxStyle}>
        <div className={styles.blurBefore}></div>
        <div className={styles.blurAfter}></div>
      </div>
    </div>
  );
};

export default MotionBlur;
