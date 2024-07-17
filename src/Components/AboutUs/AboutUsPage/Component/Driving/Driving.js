import styles from "./Driving.module.css"
import { useEffect } from "react"
import AOS from 'aos'
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

const Driving = () => {

    useEffect(()=> {
        AOS.init({duration: "3000"})
      },[])
  return (
    <>
    <div className={styles.driving__main_div}>
    <h2 className={styles.driving__heading} data-aos="zoom-in">Driving Innovation and Excellence in <br/> Technology Solutions</h2>
    <div className={styles.driving__text_box} data-aos="zoom-in">
    <p className={styles.driving__textone}>ByteBillion - Where creativity, collaboration, and cutting-edge technology unite</p>
    <p className={styles.driving__texttwo}>to shape the future of business solutions worldwide.</p>
    </div>
    <Link to={'/contactus'}>
    <button className={styles.driving__btn} data-aos="zoom-in">Contact Us</button>
    </Link>
    </div>
    </>
  )
}

export default Driving