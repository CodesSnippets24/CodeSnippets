import Image from "next/image";
import styles from "./ProfileCard.module.css";
import { useState } from "react";

const ProfileCard = () => {
  const [cir, setCir] = useState(false);
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <div className={styles.center}>
          <div className={styles.left}>
            <div className={styles.imgframe}>
              <div
                className={styles.imgWrap}
                onMouseEnter={() => setCir(true)}
                onMouseLeave={() => setCir(false)}
              >
                <div
                  //   className={`${styles.circle1} ${cir ? styles.circle1C1 : ""}`}
                  className={styles.circle1}
                ></div>
                <div
                  // className={`${styles.circle2} ${
                  //   cir ? styles.circle1C2 : ""
                  // }`}
                  className={styles.circle2}
                ></div>
                <Image
                  className={styles.image}
                  height={70}
                  width={70}
                  src="/images/jessica-potter.jpg"
                />
              </div>
            </div>
            <h1 className={styles.h1}>Jessica Potter</h1>
            <h1 className={styles.h2}>Visual Artist</h1>
            <div className={styles.follow}>Follow</div>
            <div className={styles.message}>Message</div>
          </div>
          <div className={styles.right}>
            <div className={styles.one}>
              <div className={styles.OneC}>
                <h3 className={styles.h3}>523</h3>
                <h1 className={styles.h2}>Posts</h1>
              </div>
            </div>

            <div className={styles.one}>
              <div className={styles.OneC}>
                <h3 className={styles.h3}>1387</h3>
                <h1 className={styles.h2}>Likes</h1>
              </div>
            </div>
            <div className={styles.one}>
              <div className={styles.OneC}>
                <h3 className={styles.h3}>146</h3>
                <h1 className={styles.h2}>Followers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
