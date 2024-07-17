import React,{useEffect} from 'react'
import styles from './AboutUsPage.module.css'
import Driving from './Component/Driving/Driving'
import Overview from './Component/Overview/Overview'
import Team from './Component/Team/Team'
import Choose from './Component/Choose/Choose'
const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className={styles.container_aboutuspage}>
      <Driving/>
      <Overview/>
      <Team/>
      <Choose/>
    </div>
  )
}

export default AboutUsPage