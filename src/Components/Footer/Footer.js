import React from 'react'
import Colfirst from './Footerchild/Colfirst'
import Colsecond from './Footerchild/Colsecond'
import Colthird from './Footerchild/Colthird'
import Colfourth from './Footerchild/Colfourth'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className={styles.container_footer}>
      <div className={styles.box_footer}>
    <Colfirst/>
    <Colsecond/>
    <Colthird/>
    <Colfourth/>  
      </div>
      <div className={styles.copyright_footer}>
        <p>© 2023-2024 <Link className={styles.linktext_footer} to={'/'}>Byte Billion™ </Link>. All Rights Reserved.</p>
        </div>  
    </div>
  )
}

export default Footer