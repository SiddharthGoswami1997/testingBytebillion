import {React, useEffect} from 'react'
import styles from './Joinus.module.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"

const Joinus = () => {

  useEffect(()=> {
    AOS.init({duration: "3000"})
  },[])

const roles = ['UI/UX Designing','React','QA Intern','MERN Stack Developer']
 

  return (
    <section className={styles.container_joinus}>
        <div className={styles.heading_joinus} >
        <h1 className={styles.h1_joinus}>Join Us</h1>
        <div className={styles.h1underline_joinus}></div>
        </div>
        <p>Current Openings</p>
        <div className={styles.roles_joinus}>
            <div className={styles.headingdiv_joinus} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className={styles.rolesheading_joinus}><p>Roles</p><p>More Info</p></div>
            <div className={styles.rolesunderline_joinus}></div>
            </div>
            {roles.map((item,index)=>(<div className={styles.headingdiv_joinus} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="4000">
                <div className={styles.opening_joinus}><p>{item}</p><p><Link style={{textDecoration:'none',  color: "gray",  cursor: 'not-allowed',  opacity: 0.5 }} to={'/home'}>Apply Now</Link></p></div>
            <div className={index=== roles.length-1 ? styles.currentopeningborder_joinus : styles.currentopening_joinus}></div>
            </div>
                
                
                ))}
        </div>
    </section>
  )
}

export default Joinus