import React, { useEffect } from 'react'
import styles from "./Bstracker.module.css"
import AOS from 'aos'
import "aos/dist/aos.css"

const Bstracker = () => {

  useEffect(()=> {
    AOS.init({duration: "1500"})
  },[])

  return (
    <>
     <div className={styles.main_container}>
        <h4 className={styles.heading}>Business Sales Tracker</h4>

        <div className={styles.graph}>

        <div className={styles.values}>
            <span  className={styles.month}>20k</span>
            <span  className={styles.month}>15k</span>
            <span  className={styles.month}>10k</span>
            <span  className={styles.month}>5k</span>
        </div>

        <div className={styles.months}>
            <span  className={styles.month}>Jan</span>
            <span className={styles.month}>Feb</span>
            <span className={styles.month}>Mar</span>
            <span className={styles.month}>Apr</span>
            <span className={styles.month}>May</span>
        </div>

        <div className={styles.bar_box}>
           <div className={styles.bar1} data-aos="zoom-in" data-aos-delay="100" ></div>
           <div className={styles.bar2} data-aos="zoom-in" data-aos-delay="300"></div>
           <div className={styles.bar3} data-aos="zoom-in" data-aos-delay="500"></div>
           <div className={styles.bar4} data-aos="zoom-in" data-aos-delay="700"></div>
           <div className={styles.bar5} data-aos="zoom-in" data-aos-delay="900"></div>
        </div>

        </div>
     </div>
    </>
  )
}

export default Bstracker