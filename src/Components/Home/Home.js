import React,{useEffect} from "react";
import styles from "./Home.module.css";
import Line from "./Graph/Line";
import AboutUs from "../AboutUs/AboutUs";
import FAQ from "../FAQ/FAQ";
import Projects from "../caroursel/Project";
import Testimonial from "../Testimonial/Testimonial";
import Bstracker from "./Graph/Bstracker/Bstracker";
import Totalproject from "./Graph/Totalproject/Totalproject"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(()=> {
    AOS.init({duration: "1500"})
  },[])


  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div className={styles.container}>
      <section className={styles.container_home}>
        <div className={styles.content1_home} data-aos="zoom-in" data-aos-delay="300"data-aos-duration="1500">
          <h1 data-aos="zoom-in" data-aos-delay="300"data-aos-duration="1500" className={styles.h1_home}>Enhance Your Business Efficiency </h1>
          <p data-aos="zoom-in" data-aos-delay="300"data-aos-duration="1500" className={styles.p_home}>
            Let us tackle your complex projects with our skilled development
            teams, or seamlessly integrate our vetted developers into your
            existing workforce.
          </p>
         <Link to={'/contactus'}><button className={styles.btn_home} data-aos="zoom-in" >Contact Us</button></Link> 
        </div>
        <div className={styles.content2_home} >
        <img src="/Images/Homeresponsive_image.png" alt="home" className={styles.reponsivehome_image} data-aos="zoom-in"/>

          <div className={styles.content2box_home}>
            <img src="/Images/Homeresponsive_image.png" alt="home" className={styles.reponsivehome_image}/>
            <div className={styles.women_home}  data-aos="fade-up" data-aos-delay="300"data-aos-duration="1500">
              <img src="/Images/Home_women.png" alt="women"  data-aos="fade-up" data-aos-delay="300"data-aos-duration="1500"  data-aos-anchor-placement="top-center"/>
            </div>
            <div className={styles.circle_home}   data-aos="zoom-in">
            <img src="/Images/Home_circle.png" alt="circle" data-aos="zoom-in"  data-aos-delay="300"data-aos-duration="1500"  data-aos-anchor-placement="top-center"/>
            </div>
            <div className={styles.gearb_home}>
              <img src="/Images/Home_biggear.png" alt="gaer1" />
            </div>
            <div className={styles.gears_home}>
              <img src="/Images/Home_smallgear.png" alt="gear2" />
            </div>
            <div className={styles.line_home}>
              <Line></Line>
            </div>
            <div className={styles.bar_home}>
              <Bstracker/>
              {/* <img src="/Images/Home_bar.png" alt="bar"/> */}
            </div>
            <div className={styles.curve_home}>
             <Totalproject/>
              {/* <img src="/Images/Home_curve.png" alt="curve"/> */}
              </div>
          </div>
        </div>
      </section>
      <div className={styles.aboutuscomp_aboutus}>
       <AboutUs />
    <Projects />
    <Testimonial/>
       <FAQ />
      </div>
    </div>
  );
};

export default Home;
