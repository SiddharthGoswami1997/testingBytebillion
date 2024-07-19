import React from 'react'
import styles from './Colfirst.module.css'
import { Link } from 'react-router-dom'
const Colsecond = () => {
  return (
    <div className={styles.container_colthird}>
  <h3>Quick Links</h3> 
   <p> <Link   className={styles.linktext_colthird}  to={'/'}>Home</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/aboutus'}>About</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>Services</Link></p>
   {/* <p> <Link   className={styles.linktext_colthird}  to={'/contactus'}>FAQ</Link></p> */}
   <p> <Link   className={styles.linktext_colthird}  to={'/career'}>Career</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/contactus'}>Contact</Link>
   </p>
   
  </div>
  )
}

export default Colsecond