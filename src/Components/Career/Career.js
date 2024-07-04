import React,{useEffect} from 'react'
import styles from './Career.module.css'

import Together from './Components2/Together/Together'
import Joinus from './Components2/Joinus/Joinus'
import Ourvalues from './Components2/Ourvalues/Ourvalues'
import Employeebenefit from './Components2/Employeebenefit/Employeebenefit'
import Hiring from './Components2/Hiring/Hiring'
import CareerArea from './Components2/CareerArea/CareerArea'

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className={styles.container_career}>
      <Together/>
      <Joinus/>
      <Ourvalues/>
     <Employeebenefit/>
        <Hiring/>
     <CareerArea/>
      
    </div>
  )
}

export default Career