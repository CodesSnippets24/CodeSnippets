import React from "react";
import styles from "./BlobAnimation.module.scss";

const BlobAnimation = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.center}>
        <div className={styles.ball}></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`${styles["blubb-" + (i + 1)]} ${styles.blubb}`}
          ></div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`${styles["sparkle-" + (i + 1)]} ${styles.sparkle}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BlobAnimation;
