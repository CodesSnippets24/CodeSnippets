import React, { useState, useEffect } from "react";
import styles from "./ProductSlider.module.css";
import Image from "next/image";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSrc.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  const imgSrc = [
    {
      src: "/images/stand.png",
      width: "89",
      height: "276",
    },
    {
      src: "/images/sofa.png",
      width: "200",
      height: "276",
    },
  ];
  const currentImage = imgSrc[currentIndex];

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.circle}>
          <Image
            src={currentImage.src}
            width={currentImage.width}
            height={currentImage.height}
            alt="blob"
            className={styles.object}
          />
        </div>
        <Image
          src="/images/shape1.png"
          width={600}
          height={700}
          alt="blob"
          className={styles.shape}
        />
        {/* <svg
          height={550}
          width={700}
          className={styles.shape}
          style={{ borderRadius: "40px 0px 0px 0px" }}
        >
          <path
            d="M 0 0 H 400 Q 480 30, 440 130 L 360 400 Q 350 430, 290 440 L -400 500 V -500"
            fill="rgb(133, 45, 214)"
          />
        </svg>
        <svg
          height={550}
          width={700}
          style={{ borderRadius: "40px 0px 0px 0px" }}
        >
          <path
            d="M 0 0 H 400 Q 480 30, 440 130 L 360 400 Q 350 430, 290 440 L -400 500 V -500"
            fill="rgb(127, 214, 45)"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default ProductSlider;
