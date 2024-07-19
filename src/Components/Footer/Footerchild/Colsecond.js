import React from 'react'
import styles from './Colfirst.module.css'
import { Link } from 'react-router-dom'
const Colsecond = () => {
  return (
    <div className={styles.container_colsecond}>
  <h3>Services</h3> 
   
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>Cloud</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>MERN Stack</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>Web development</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>Mobile development</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>UI/UX development</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>Machine learning</Link></p>
   <p> <Link   className={styles.linktext_colthird}  to={'/services'}>Staff Augmentation</Link></p>

    </div>
  )
}

export default Colsecond