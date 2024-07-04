import React from "react";
import styles from "./AnimatedSerial.module.css";

const AnimatedSerial = ({serial}) => {
  
  return (
    <>
      <div className={styles.mainbox_serial}>
        <div className={styles.box1_serial}>
          <p className={styles.text_serial}>{serial}</p>
        </div>
        <div className={styles.line_serial}></div>
        <div className={styles.sbox}></div>
      </div>
    </>
  );
};

export default AnimatedSerial;
