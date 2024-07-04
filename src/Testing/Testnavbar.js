import React from 'react'
import styles from '../Components/Navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Testnavbar = () => {


      let location = useLocation();
      console.log("location",location.pathname,location);
    



    const data = ['Home','About Us','Services','Career','Contact Us']
    let path = location.pathname
  return (
    <div>
        <div className={styles.container_navbar}>
        <div >
            <img className={styles.logo_navbar}src='https://www.bytebillion.com/images/FullLogo.png' alt='Logo'/>
        </div>
            
        <ul className={styles.menu_navbar}>
           {data.map((item)=>(<li style={{color:`${item === path ? 'red': 'green'}`}}>{item}</li>))} 
        
           <li>
                    <button className={styles.btn_navbar}><Link className={styles.linktext}  to={'/startproject'}>Start a project</Link></button>
            </li>
        </ul>

            </div> 
    </div>
  )
}

export default Testnavbar