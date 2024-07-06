import React from 'react'
import styles from './Navigate.module.css'
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Navigate = () => {


      let location = useLocation();
    //   console.log("location",location.pathname,location);
    



    const data = [{name:'PROJECT',path:'',pathname:"/startproject"},{name:'GENERAL ENQUIRY',path:'general',pathname:"/startproject/general"},{name:'JOB ENQUIRY',path:'job', pathname:'/startproject/job' }]
    let pathway = location.pathname;
  return (
    <div className={styles.routingoutlet_navigate} >

        <div className={styles.container_navigate}>
       
            
        <ul className={styles.menu_navigate}>
           {data.map((item)=>(<li className={styles.menuoption_navigate} ><Link   style={{backgroundColor:`${item.pathname === pathway ? '#f584342d': 'white'}`}} className={styles.link_navigate}  to={item.path}>{item.name}</Link></li>))} 
      
         
        </ul>
            </div> 
            
        <Outlet/>
    </div>
    
  )
}

export default Navigate