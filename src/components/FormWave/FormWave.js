import { useEffect } from "react";
import styles from "./FormWave.module.css";
const WavingAnimation = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".form-control input");
    const labels = document.querySelectorAll(".form-control label");

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <h1>Fun Waving Animation</h1>
      <div className={styles.formControl}>
        <input type="text" required />
        <label>Email</label>
      </div>

      <div className={styles.formControl}>
        <input type="text" required />
        <label>Password</label>
      </div>
    </div>
  );
};

export default WavingAnimation;
