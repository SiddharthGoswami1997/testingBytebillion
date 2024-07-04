import React,{useEffect} from 'react'
import Itstaff from './Component/Itstaff/Itstaff'
import Mainservice from './Component/Mainservice/Mainservice'
import styles from "./Services.module.css"
import Ourservices from './Component/Ourservices/Ourservices'
import Optimizing from './Component/Optimizing/Optimizing'
import Process from './Component/Process/Process'
import Learnhow from './Component/Learnhow/Learnhow'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div className={styles.component_service}>
      <Mainservice/>
      <Ourservices/>
      <Optimizing/>
      <Process/>
      <Learnhow/>
      <Itstaff/>
      </div>
  )
}

export default Services