import React, { useState, useEffect } from "react";
import styles from "./RockPaperScissors.module.css";

const RockPaperScissors = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");
  const [computerHand, setComputerHand] = useState({
    rock: false,
    paper: false,
    scissors: false,
  });
  const [userHand, setUserHand] = useState({
    rock: false,
    paper: false,
    scissors: false,
  });
  useEffect(() => {
    getResult();
  }, [userHand, computerHand]);
  const getRandomHand = () => {
    const hands = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  };
  const getResult = () => {
    console.log(userHand, computerHand);
    if (
      (userHand.rock && computerHand.scissors) ||
      (userHand.paper && computerHand.rock) ||
      (userHand.scissors && computerHand.paper)
    ) {
      console.log("user");
      setResult("You Win");
    } else if (
      (userHand.rock && computerHand.paper) ||
      (userHand.paper && computerHand.scissors) ||
      (userHand.scissors && computerHand.rock)
    ) {
      console.log("computer");
      setResult("Computer Win");
    } else if (
      (userHand.rock && computerHand.rock) ||
      (userHand.scissors && computerHand.scissors) ||
      (userHand.paper && computerHand.paper)
    ) {
      console.log("tie");
      setResult("It's a Tie");
    }
  };
  const computerMove = () => {
    const randomHand = getRandomHand();
    setComputerHand({
      rock: randomHand === "rock",
      paper: randomHand === "paper",
      scissors: randomHand === "scissors",
    });
  };

  return (
    <div className={styles.wrapper}>
      <div id="hands">
        <div
          className={`${styles.hand} ${
            computerHand.rock || computerHand.paper || computerHand.scissors
              ? styles.rocKAnimation
              : ""
          } ${computerHand.scissors ? styles.scissors : ""} ${
            computerHand.paper ? styles.paper : ""
          } `}
          id="computer-hand"
        >
          <div className={styles.fist}></div>
          <div className={`${styles.finger} ${styles.finger1}`}></div>
          <div className={`${styles.finger} ${styles.finger2}`}></div>
          <div className={`${styles.finger} ${styles.finger3}`}></div>
          <div className={`${styles.finger} ${styles.finger4}`}></div>
          <div className={styles.thumb}></div>
          <div className={styles.arm}></div>
        </div>

        <div
          className={`${styles.hand} ${styles.rotate}  ${
            userHand.rock || userHand.paper || userHand.scissors
              ? styles.rocKAnimation
              : ""
          } ${userHand.scissors ? styles.scissors : ""} ${
            userHand.paper ? styles.paper : ""
          }`}
          id="user-hand"
        >
          <div className={styles.fist}></div>
          <div className={`${styles.finger} ${styles.finger1}`}></div>
          <div className={`${styles.finger} ${styles.finger2}`}></div>
          <div className={`${styles.finger} ${styles.finger3}`}></div>
          <div className={`${styles.finger} ${styles.finger4}`}></div>
          <div className={styles.thumb}></div>
          <div className={styles.arm}></div>
        </div>
      </div>
      {showResult && (
        <p className={styles.text}>
          Result<span>{result}</span>
        </p>
      )}
      <div id="symbol" className={styles.boxWrap}>
        <div className={styles.box}>
          <label
            htmlFor="rock-rock"
            onClick={() => {
              computerMove();
              setUserHand({ rock: true, paper: false, scissors: false });
              setShowResult(true);
            }}
          >
            ✊
          </label>
        </div>
        <div className={styles.box}>
          <label
            htmlFor="rock-paper"
            onClick={() => {
              computerMove();
              setUserHand({ rock: false, paper: true, scissors: false });
              setShowResult(true);
            }}
          >
            🖐️
          </label>
        </div>
        <div className={styles.box}>
          <label
            htmlFor="rock-scissors"
            onClick={() => {
              computerMove();
              setUserHand({ rock: false, paper: false, scissors: true });
              setShowResult(true);
            }}
          >
            ✌
          </label>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
