import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypewriterComponent = () => {
  return (
    <TypeAnimation
      sequence={["A Coders Life 🥹", 1000]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "2em", fontWeight: 900, display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypewriterComponent;
