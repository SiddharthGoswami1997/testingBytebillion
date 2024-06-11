import React from 'react'
import styles from './Colfirst.module.css'
const Colfirst = () => {
  return (
    <div className={styles.container_colfirst}>
      <img src='./Images/ByteBillionLogo.png' alt='ByteBillion' className={styles.img_colfirst} />
      <p>Streamline operations, transform learning, and drive growth with our tailored cloud-based software solutions.</p>
      <div className={styles.logo_colfirst}>
        <img src='./Images/Instagram.png' alt='Insta'/>
        <img src='./Images/Facebook.png' alt='Fb'/>
      </div>
    </div>
  )
}

export default Colfirst