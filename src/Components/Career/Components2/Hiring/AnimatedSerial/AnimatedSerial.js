import {useEffect} from "react";
import styles from "./AnimatedSerial.module.css";
import AOS from 'aos'
import "aos/dist/aos.css"

const AnimatedSerial = ({serial}) => {

  useEffect(()=> {
    AOS.init({duration: "2000"})
  },[])
  
  return (
    <>
      <div className={styles.mainbox_serial} data-aos="zoom-in-right">
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
