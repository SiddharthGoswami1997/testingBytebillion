import React, { useEffect } from 'react'
import styles from "./Totalproject.module.css"
import AOS from 'aos'
import "aos/dist/aos.css"


const Totalproject = () => {

  useEffect(()=> {
    AOS.init({duration: "1500"})
  },[])

  return (
    <>
     <div className={styles.main_div}>
        <div className={styles.heading}><h4>Total Projects</h4></div>
        <div className={styles.number}><h4>30 +</h4></div>
        <div className={styles.image} data-aos="zoom-in" data-aos-duration="1500"><img src='/Images/Graph/total_projects.png' alt='curve'/></div>
     </div>
    </>
  )
}

export default Totalproject;