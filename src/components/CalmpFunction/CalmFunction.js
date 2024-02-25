import React from "react";
import Styles from "./CalmFucntion.module.css";
import { TypeAnimation } from "react-type-animation";

const CalmFunction = () => {
  return (
    <>
      <div className={Styles.parent} dataValue="Parent">
        <div className={Styles.child} dataValue="child"></div>
      </div>
      <div className="content" style={{ transform: "scale(1.5)" }}>
        <div className="header">
          <div className="circle"></div>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <p>Clamp Function</p>
        </div>
        <div className="body">
          <TypeAnimation
            sequence={[
              `.child {
                width: clamp(200px, 65%, 400px);
                height: 100%;
                background-color: #8525b5;
                border-radius: 8px;
              }`,
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

export default CalmFunction;
