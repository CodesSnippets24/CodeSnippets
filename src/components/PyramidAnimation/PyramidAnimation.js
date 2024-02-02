import Head from "next/head";
import styles from "./PyramidAnimation.module.css";

const PyramidAnimation = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.frame}>
          <div className={styles.center}>
            <div className={styles.sky}></div>
            <div className={styles.leftside}></div>
            <div className={styles.rightside}></div>
            <div className={styles.shadow}></div>
            <div className={styles.sun}></div>
            <div className={styles.ground}></div>
          </div>
        </div>
      </main>
    </>
  );
};
export default PyramidAnimation;
