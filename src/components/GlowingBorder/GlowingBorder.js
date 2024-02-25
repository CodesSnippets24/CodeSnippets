import React from "react";
import styles from "./GlowingBorder.module.css";

const GlowingBorder = () => {
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.text}>Glowing Border</h1>
        <span></span>
        <div className={styles.box1}>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default GlowingBorder;
