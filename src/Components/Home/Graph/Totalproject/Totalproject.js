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
     <div className={styles.totalprojects__main_div}>
        <div className={styles.totalprojects__heading}>
          <h4 className={styles.totalprojects__text}>Total Projects</h4>
        </div>
        <div className={styles.totalprojects__number}>
          <h4 className={styles.totalprojects__text}>30 +</h4>
        </div>
        <div className={styles.totalprojects__image} data-aos="zoom-in" data-aos-duration="1500">
          <img src='/Images/Graph/total_projects.png' className={styles.totalprojects__graphimg} alt='curve'/>
        </div>
     </div>
    </>
  )
}

export default Totalproject;