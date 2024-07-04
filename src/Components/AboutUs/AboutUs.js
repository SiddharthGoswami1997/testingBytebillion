import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className={styles.container_aboutus}>
        <div className = {styles.content1_aboutus} >

            
            <div  className = {styles.imagebox_aboutus} >
               <img className = {styles.image_aboutus} src='/Images/aboutus_main.png' alt='content_img'/>
               <div className = {styles.logo1_aboutus}>
                 <img className = {styles.logo_aboutus}  src='/Images/aboutus_logo1.png' alt='logo_img'/> 
               </div> 
               <div  className = {styles.logo2_aboutus}>
                  <img className = {styles.logo_aboutus} src='/Images/aboutus_logo2.png' alt='logo_img'/>
               </div>
            </div>
           
            
        </div>
        <div className = {styles.content2_aboutus}>
            <h2 className={styles.content2h2_aboutus}>Who we are</h2>
            <h1 className={styles.content2h1_aboutus}>The Management Software</h1>
            <p>At ByteBillion, we're dedicated to pushing the boundaries of technology to deliver innovative solutions for businesses worldwide. Located in the heart of Indore. Our team of experts specializes in a range of cutting-edge technologies, ensuring that we provide top-notch services tailored to meet your needs.</p>
            <button className={styles.btn_aboutus}>View more information</button>
        </div>
    </div>
  )
}

export default AboutUs