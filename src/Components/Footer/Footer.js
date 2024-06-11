import React from 'react'
import Colfirst from './Footerchild/Colfirst'
import Colsecond from './Footerchild/Colsecond'
import Colthird from './Footerchild/Colthird'
import Colfourth from './Footerchild/Colfourth'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container_footer}>
      <div className={styles.box_footer}>
   <Colfirst/>
    <Colsecond/>
    <Colthird/>
    <Colfourth/>  
      </div>
      <div>
        <p>© 2022-2023 <a href='#Aboutus'>Byte Billion™ </a>. All Rights Reserved.</p>
        </div>  
    </div>
  )
}

export default Footer