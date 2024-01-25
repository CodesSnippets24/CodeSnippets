// CardAnimation.jsx

import React, { useState } from "react";
import styles from "./CardAnimation.module.css";

const CardAnimation = () => {
  const [selectedOption, setSelectedOption] = useState("c1"); // Set the initial selected option

  const handleInputChange = (event) => {
    console.log(event.target.id);
    setSelectedOption(event.target.id); // Update the selected option on input change
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          type="radio"
          name="slide"
          id="c1"
          checked={selectedOption === "c1"}
          onChange={handleInputChange}
          className={styles.input}
        />
        <label htmlFor="c1" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>1</div>
            <div className={styles.description}>
              <h4>Stepping Back in Time</h4>
              <p>
                Immerse yourself in the world of the samurai with this photo of
                a traditional Japanese samurai home.
              </p>
            </div>
          </div>
        </label>
        <input
          type="radio"
          name="slide"
          id="c2"
          className={styles.input}
          checked={selectedOption === "c2"}
          onChange={handleInputChange}
        />
        <label htmlFor="c2" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>2</div>
            <div className={styles.description}>
              <h4>Dreamy Delights</h4>
              <p>
                This stunning sky is a masterpiece of soft pinks and delicate
                clouds, swirling like spun sugar above a tranquil landscape.
              </p>
            </div>
          </div>
        </label>
        <input
          type="radio"
          name="slide"
          id="c3"
          className={styles.input}
          checked={selectedOption === "c3"}
          onChange={handleInputChange}
        />
        <label htmlFor="c3" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>3</div>
            <div className={styles.description}>
              <h4>Stone and Silence</h4>
              <p>
                Stillness drapes around the warrior like a cloak, masking a
                storm of purpose within.
              </p>
            </div>
          </div>
        </label>
        <input
          type="radio"
          name="slide"
          id="c4"
          className={styles.input}
          checked={selectedOption === "c4"}
          onChange={handleInputChange}
        />
        <label htmlFor="c4" className={styles.card}>
          <div className={styles.row}>
            <div className={styles.icon}>4</div>
            <div className={styles.description}>
              <h4>Neon Dreamscapes</h4>
              <p>Unveiling the Wonders and Whispers of Cyber City</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CardAnimation;
