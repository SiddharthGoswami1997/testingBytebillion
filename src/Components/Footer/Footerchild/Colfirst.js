import React from 'react'
import styles from './Colfirst.module.css'
import { Link } from 'react-router-dom' 
const Colfirst = () => {
  return (
    <div className={styles.container_colfirst}>

<Link   className={styles.linktext_colthird}  to={'/'}><img src='./Images/ByteBillionLogo.png' alt='ByteBillion' className={styles.img_colfirst} /></Link>
     
      <p className={styles.footerpara_colfirst}>Streamline operations, transform learning, and drive growth with our tailored cloud-based software solutions.</p>
      <div className={styles.logo_colfirst}>
       <a href='https://www.instagram.com/byte.billion/?hl=en' target='blank'>
       <img src='./Images/Instagram.png' alt='Insta'/>      
        </a> 
        <a href='https://www.linkedin.com/company/bytebillion/' target='blank'> 
        <img src='./Images/Facebook.png' alt='Fb'/>
        </a>
      </div>
    </div>
  )
}

export default Colfirst