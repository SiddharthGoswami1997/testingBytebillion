import { useEffect } from "react"
import styles from "./Mainservice.module.css"
import AOS from 'aos'
import "aos/dist/aos.css"

const Mainservice = () => {

  useEffect(()=> {
    AOS.init({duration: "2000"})
  },[])

  return (
    <div className={styles.mainservice__box}>
      <img className={styles.mainservice__img} src="/Images/Mainservice/service_main.png" alt="main services"/>
      <div className={styles.mainservice__text}>
      <h1 className={styles.mainservice__heading} data-aos="fade-up" data-aos-anchor-placement="center-bottom">Grow your business with innovative IT solutions, exceptional service, and cutting-edge technology for success</h1>
      </div>

    </div>
  )
}

export default Mainservice

