import { useEffect } from "react"
import styles from "./Process.module.css"
import AOS from 'aos'
import "aos/dist/aos.css"

const details = [
    {
        name: "Define your needs",
        msg: "Tell us about your project requirements and the specific skills you seek.",
    },
    {
        name: "Expert matching",
        msg: "Our team will identify qualified IT professionals with the perfect skillset and experience.",
    },{
        name: "Seamless integration",
        msg: "The chosen candidate undergoes a thorough onboarding process to ensure smooth integration with your team.",
    },{
        name: "Ongoing support",
        msg: "We provide ongoing communication and project management support throughout the engagement.",
    },

]

const Process = () => {

  useEffect(()=> {
    AOS.init({duration: "2000"})
  },[])

  return (
    
    <div className={styles.process__main_box}>
     <div className={styles.process__top}>
        <h2 className={styles.process__heading} data-aos="zoom-in">Process</h2>
        <hr className={styles.process__lines} data-aos="zoom-in"/>
     </div>

     <div className={styles.process__bottombox}>
      <div className={styles.process__numbers}>
      <div className={styles.process__container}>
        <div className={styles.step} data-aos="zoom-in">1 </div>
        <div className={styles.vertical_lineone} data-aos="fade-down" data-aos-delay="400"></div>
        <div className={styles.step} data-aos="zoom-in">2</div>
        <div className={styles.vertical_linetwo} data-aos="fade-down" data-aos-delay="400"></div>
        <div className={styles.step} data-aos="zoom-in">3</div>
        <div className={styles.vertical_linethree} data-aos="fade-down" data-aos-delay="400"></div>
        <div className={styles.step} data-aos="zoom-in">4</div>
      </div>
      </div>
      <div className={styles.process__data}>
       {details.map((item, index) => (
            <div key={index} className={styles.process__dataitem}>
            <h4 className={styles.process__smallheading}>{item.name}</h4>
            <p className={styles.process__text}>{item.msg}</p>
            </div>
       ))}
       </div>

     </div>
    </div>
    
  )
}

export default Process