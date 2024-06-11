import React from 'react'
import styles from './Home.module.css'
import Line from './Graph/Line'

const Home = () => {
  return (
    <section className={styles.container_home}>
        <div className={styles.content1_home}>
            <h1 className={styles.h1_home}>Enhance Your Business Efficiency </h1>
            <p className={styles.p_home}>Let us tackle your complex projects with our skilled development teams, or seamlessly integrate our vetted developers into your existing workforce.</p>
            <button className={styles.btn_home}>Contact Us</button>
        </div>
        <div className={styles.content2_home}>
            <div className={styles.content2box_home} >
        <div className={styles.women_home}>
            <img src='/Images/Home_women.png' alt='women'/>
        </div>
        <div className={styles.circle_home}>
        <img src='/Images/Home_circle.png' alt='circle'/>

        </div>
        <div className={styles.gearb_home}>
        <img src='/Images/Home_biggear.png' alt='gaer1'/>

        </div>
        <div className={styles.gears_home}>
        <img src='/Images/Home_smallgear.png' alt='gear2'/>

        </div>
        <div className={styles.line_home}>
            <Line></Line>
        </div>
        <div className={styles.bar_home}>BArgraph</div>
        <div className={styles.curve_home}>CurveChart</div>
        </div>
        </div>

    </section>
  )
}

export default Home