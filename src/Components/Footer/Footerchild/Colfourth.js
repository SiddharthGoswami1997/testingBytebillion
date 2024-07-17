import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Colfirst.module.css'
const Colsecond = () => {
  return (
    <div className={styles.container_colfourth}>
  <h3>Legal</h3> 
   <p> <Link   className={styles.linktext_colthird}  to={'/privacy'}>Privacy policy</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/terms'}>Terms and conditions</Link></p>
 
   
  </div>
  )
}

export default Colsecond