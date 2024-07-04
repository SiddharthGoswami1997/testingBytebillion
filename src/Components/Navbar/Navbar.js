import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

const [showIcon, setShowIcon ] = useState(false)

  return (
    <div className={styles.forhamburger_navbar}>
    <div className={styles.container_navbar}>
    <div className={styles.hamburger_navbar} onClick={()=> setShowIcon(!showIcon)}>{showIcon === true ? <i class="fa-solid fa-xmark fa-1x"></i>:<i class="fa-solid fa-bars fa-1x"></i> }
       
       </div>
        <div >
            <img className={styles.logo_navbar}src='https://www.bytebillion.com/images/FullLogo.png' alt='Logo'/>
        </div>
        <div className={styles.menudiv_navbar}>
            <ul className={styles.menu_navbar} >
                <li>
                <Link className={styles.linktext}  to={'/'}>Home</Link>
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/aboutus'}>About Us</Link>

                    
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/services'}>Services</Link>
                    
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/career'}>Career</Link>
                     
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/contactus'}>Contact Us</Link>
                    
                    </li>
                <li>
                    <button className={styles.btn_navbar}><Link className={styles.btnlinktext}  to={'/startproject'}>Start a project</Link></button>
                </li>
                
            </ul>
        </div>
       
       <button className={styles.Hamburgerbtn_navbar}><Link className={styles.btnlinktext}  to={'/startproject'}>Start Project</Link></button>

       

    </div>

 {/* 2nd menu */}
 <div className={showIcon ? styles.hamburgermenu_navbar : styles.mobilemenu}>
        <ul className={showIcon ? styles.hamburgermenumobile_navbar : styles.mobilemenu} >
                <li>
                <Link className={styles.linktext}  to={'/'}   onClick={()=> setShowIcon(!showIcon)}>             
                Home</Link>
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/aboutus'} onClick={()=> setShowIcon(!showIcon)}>About Us</Link>

                    
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/services'} onClick={()=> setShowIcon(!showIcon)}>Services</Link>
                    
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/career'} onClick={()=> setShowIcon(!showIcon)}>Career</Link>
                     
                    </li>
                <li>
                <Link className={styles.linktext}  to={'/contactus'} onClick={()=> setShowIcon(!showIcon)}>Contact Us</Link>
                    
                    </li>
              
                
            </ul>   
        </div>


    </div>
  )
}

export default Navbar