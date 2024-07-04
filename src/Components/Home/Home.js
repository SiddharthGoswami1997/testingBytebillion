import React,{useEffect} from "react";
import styles from "./Home.module.css";
import Line from "./Graph/Line";
import AboutUs from "../AboutUs/AboutUs";
import FAQ from "../FAQ/FAQ";
import Projects from "../caroursel/Project";
import Testimonial from "../Testimonial/Testimonial";
import Bstracker from "./Graph/Bstracker/Bstracker";
import Totalproject from "./Graph/Totalproject/Totalproject"
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <>
      <section className={styles.container_home}>
        <div className={styles.content1_home}>
          <h1 className={styles.h1_home}>Enhance Your Business Efficiency </h1>
          <p className={styles.p_home}>
            Let us tackle your complex projects with our skilled development
            teams, or seamlessly integrate our vetted developers into your
            existing workforce.
          </p>
          <button className={styles.btn_home}>Contact Us</button>
        </div>
        <div className={styles.content2_home}>
        <img src="/Images/Homeresponsive_image.png" alt="home" className={styles.reponsivehome_image}/>

          <div className={styles.content2box_home}>
            <img src="/Images/Homeresponsive_image.png" alt="home" className={styles.reponsivehome_image}/>
            <div className={styles.women_home}>
              <img src="/Images/Home_women.png" alt="women" />
            </div>
            <div className={styles.circle_home}>
              <img src="/Images/Home_circle.png" alt="circle" />
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
              {/* <Bstracker/> */}
              <img src="/Images/Home_bar.png" alt="bar"/>
            </div>
            <div className={styles.curve_home}>
             {/* <Totalproject/> */}
              <img src="/Images/Home_curve.png" alt="curve"/>
              </div>
          </div>
        </div>
      </section>

       <AboutUs />
    <Projects />
    {/* <Testimonial/> */}
       <FAQ />
    </>
  );
};

export default Home;
