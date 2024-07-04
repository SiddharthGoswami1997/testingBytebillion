import styles from "./Driving.module.css"
import { useEffect } from "react"
import AOS from 'aos'
import "aos/dist/aos.css"


const Driving = () => {

    useEffect(()=> {
        AOS.init({duration: "1500"})
      },[])
  return (
    <>
    <div className={styles.driving__main_div}>
    <h2 className={styles.driving__heading} data-aos="fade-up">Driving Innovation and Excellence in <br/> Technology Solutions</h2>
    <div className={styles.driving__text_box}>
    <p className={styles.driving__textone}>ByteBillion - Where creativity, collaboration, and cutting-edge technology unite</p>
    <p className={styles.driving__texttwo}>to shape the future of business solutions worldwide.</p>
    </div>
    <button className={styles.driving__btn}>Contact Us</button>
    </div>
    </>
  )
}

export default Driving