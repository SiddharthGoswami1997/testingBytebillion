import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container_navbar}>
        <div >
            <img className={styles.logo_navbar}src='https://www.bytebillion.com/images/FullLogo.png' alt='Logo'/>
        </div>
        <div >
            <ul className={styles.menu_navbar} >
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Career</li>
                <li>Contact Us</li>
                <li>
                    <button className={styles.btn_navbar}>Start a project</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar