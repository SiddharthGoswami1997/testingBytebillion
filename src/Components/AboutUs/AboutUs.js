import React,{useEffect} from 'react'
import styles from './AboutUs.module.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
const AboutUs = () => {
  useEffect(()=> {
    AOS.init({duration: "1500"})
  },[])

  
  return (
    <div className={styles.container_aboutus}>
        <div className = {styles.content1_aboutus} >

            
            <div  className = {styles.imagebox_aboutus} >
               <img className = {styles.image_aboutus} src='/Images/aboutus_main.png' alt='content_img'/>
               <div className = {styles.logo1_aboutus} data-aos="zoom-in" data-aos-duration="1000">
                 <img className = {styles.logo_aboutus}  src='/Images/aboutus_logo1.png' alt='logo_img'/> 
               </div> 
               <div  className = {styles.logo2_aboutus} data-aos="zoom-in" data-aos-duration="1000">
                  <img className = {styles.logo_aboutus} src='/Images/aboutus_logo2.png' alt='logo_img'/>
               </div>
            </div>
           
            
        </div>
        <div className = {styles.content2_aboutus}>
            <h2 className={styles.content2h2_aboutus} data-aos="zoom-in" >Who we are</h2>
            <h1 className={styles.content2h1_aboutus} data-aos="zoom-in" data-aos-delay="300"data-aos-duration="3000">Innovating IT Solutions For A Digital Future</h1>
            <p data-aos="zoom-in"  className={styles.content2p_aboutus} >At ByteBillion, we're dedicated to pushing the boundaries of technology to deliver innovative solutions for businesses worldwide. Located in the heart of Indore. Our team of experts specializes in a range of cutting-edge technologies, ensuring that we provide top-notch services tailored to meet your needs.</p>
            <button className={styles.btn_aboutus} data-aos="zoom-in" ><Link to={'/aboutus'} className={styles.linktext_aboutus}>View more information</Link></button>
        </div>
    </div>
  )
}

export default AboutUs