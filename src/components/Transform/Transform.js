import React from "react";
import styles from "./Transform.module.css";

const Transform = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.aniWrap}>
        <div className={styles.scale} />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.circle}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <p>Scale Property</p>
          </div>
          <div className={styles.body}>
            {" "}
            transform: <span> &nbsp;scale(0.5)</span>;
          </div>
        </div>
      </div>
      <div className={styles.aniWrap}>
        <div className={styles.scaleX} />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.circle}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <p>ScaleX Property</p>
          </div>
          <div className={styles.body}>
            {" "}
            transform: <span> &nbsp;scaleX(1.5)</span>;
          </div>
        </div>
      </div>
      <div className={styles.aniWrap}>
        <div className={styles.skewX} />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.circle}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <p>SkewY Property</p>
          </div>
          <div className={styles.body}>
            {" "}
            transform: <span> &nbsp;skewY(20deg)</span>;
          </div>
        </div>
      </div>
      <div className={styles.aniWrap}>
        <div className={styles.skew} />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.circle}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <p>Skew Property</p>
          </div>
          <div className={styles.body}>
            {" "}
            transform: <span> &nbsp;skew(20deg, 5deg)</span>;
          </div>
        </div>
      </div>
      <div className={styles.aniWrap}>
        <div className={styles.rotate} />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.circle}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <p>Rotate Property</p>
          </div>
          <div className={styles.body}>
            {" "}
            transform: <span> &nbsp;rotate(45deg)</span>;
          </div>
        </div>
      </div>
      <div className={styles.aniWrap}>
        <div className={styles.rotate3D} />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.circle}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <p>Rotate3D Property</p>
          </div>
          <div className={styles.body}>
            {" "}
            transform: <span> &nbsp;rotate3d(1, 25, 1, 45deg)</span>;
          </div>
        </div>
      </div>
      <div className={styles.aniWrap}>
        <div className={styles.translate} />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.circle}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <p>Translate Property</p>
          </div>
          <div className={styles.body}>
            {" "}
            transform: <span> &nbsp;translate(5px, 10px)</span>;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
