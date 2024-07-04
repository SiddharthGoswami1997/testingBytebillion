import React,{useEffect} from 'react'
import styles from './StartProject.module.css'
import Navigate from './Component/Navigate/Navigate'
// import { Routes,Route } from 'react-router-dom'
// import { Routes ,Route } from 'react-router-dom'
// import JobEnquiry from './Component/JobEnquiry/JobEnquiry'
// import Project from './Component/Project/Project'
// import Resume from '../../Testing/Resume'
// import GenEnquiry from './Component/GenEnquiry/GenEnquiry'
const StartProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className={styles.container_start}>
<Navigate/>
{/* <Project /> */}


{/* 
<GenEnquiry/>
 <JobEnquiry/>    */}
 {/* <Resume/> */}
    </div>
  )
}

export default StartProject