import React from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";
const Slider = () => {
  const firstSlide = [
    {
      src: "/images/Makemmytrip.png",
      width: 234,
      height: 85,
      id: 1,
    },
    {
      src: "/images/Juspay.png",
      width: 237,
      height: 85,
      id: 2,
    },
    {
      src: "/images/IBM.png",
      width: 151,
      height: 85,
      id: 3,
    },
    {
      src: "/images/Google.png",
      width: 172,
      height: 85,
      id: 4,
    },
    {
      src: "/images/Flipkart.png",
      width: 206,
      height: 85,
      id: 5,
    },
    {
      src: "/images/facebool.png",
      width: 262,
      height: 85,
      id: 6,
    },
    {
      src: "/images/Dell.png",
      width: 186,
      height: 85,
      id: 7,
    },
    {
      src: "/images/curefit.png",
      width: 166,
      height: 85,
      id: 8,
    },
  ];
  const secondSlide = [
    {
      src: "/images/cred.png",
      width: 176,
      height: 85,
      id: 1,
    },
    {
      src: "/images/amazon.png",
      width: 183,
      height: 85,
      id: 2,
    },
    {
      src: "/images/paytm.png",
      width: 182,
      height: 85,
      id: 3,
    },
    {
      src: "/images/qualcomm.png",
      width: 264,
      height: 85,
      id: 4,
    },
    {
      src: "/images/samsung.png",
      width: 171,
      height: 85,
      id: 5,
    },
    {
      src: "/images/twitter.png",
      width: 271,
      height: 85,
      id: 6,
    },
    {
      src: "/images/zoho.png",
      width: 171,
      height: 85,
      id: 7,
    },
    {
      src: "/images/apple.png",
      width: 171,
      height: 85,
      id: 8,
    },
  ];
  return (
    <div className="px-28 py-10 ">
      <h2 className="text-3xl font-semibold text-center mb-3">
        Our Trainers at top tech companies
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="absolute h-full w-[30%] z-10"
          style={{
            background: "rgb(255,255,255)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 33%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
        <div
          className="absolute h-full w-[30%] z-10 right-0"
          style={{
            background: "rgb(255,255,255)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 67%)",
          }}
        ></div>
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup}>
            {firstSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
          <div className={styles.MarqueeGroup}>
            {firstSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup2}>
            {secondSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
          <div className={styles.MarqueeGroup2}>
            {secondSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
