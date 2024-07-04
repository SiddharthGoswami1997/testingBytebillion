import React from 'react'
import styles from './CareerArea.module.css'
import Card from './Card/Card'

const CareerArea = () => {

const data = [
  {
    logo:'/Images/Card_cloud.png',
    alter:"cloud",
    title:'Cloud',
    desc:`The cloud is revolutionizing the IT industry, and we're at the forefront of innovation.  If you're passionate about technology and want to be part of a team that's shaping the future, then a cloud career with us is the perfect launchpad.`
  },
  {
    logo:'/Images/Card_mern.png',
    alter:"mern",  
    title:'MERN Stack',
    desc:`Are you a talented developer passionate about building dynamic and scalable web applications?  If you thrive on the power of JavaScript and love crafting user-friendly experiences, then a MERN career with us is the perfect opportunity to unleash your potential.`
  },
  {
    logo:'/Images/Card_ml.png',
    alter:"ml",
    title:'Machine Learning',
    desc:`Are you fascinated by the potential of artificial intelligence to transform our world?  If so, then a career in Machine Learning (ML) with us is your chance for, turning data into gold.`
  },
  {
    logo:'/Images/Card_web.png',
    alter:"web",
    title:'Web development',
    desc:`Are you a creative problem-solver with a knack for building intuitive and engaging web experiences? Do you thrive on turning ideas into reality through the power of code? Then a web development career with us is your chance to make a real impact.`
  },
  {
    logo:'/Images/Card_mobile.png',
    alter:"mobile",
    title:'Mobile development',
    desc:`Are you obsessed with crafting experiences that fit perfectly in the palm of your hand?  Then ditch the desktop and join our mobile development team!  We're building the apps that are transforming the way people live, work, and play.`
  },
  {
    logo:'/Images/Card_ui.png',
    alter:"ui",
    title:'UI/UX development',
    desc:`Do you have a keen eye for detail and a desire to translate complex ideas into user-friendly interfaces?  If so, then a UI/UX development career with us is the perfect opportunity to turn your passion into a reality.`
  },
  
]

  return (
    <section className={styles.container_career}>
    <div className={styles.heading_career}>
      <h1 className={styles.h1_career}>
      Career Areas At Bytebillion       </h1>
      <div className={styles.h1underline_career}></div>
    </div>
    <div className={styles.content_career}>
      <div className={styles.container1_career}>
    <Card colour={'#F58634'}  logo={data[0].logo} alter={data[0].alter} title={data[0].title} desc={data[0].desc}/>
    <Card colour={'#7D4FCE'} logo={data[1].logo} alter={data[1].alter} title={data[1].title} desc={data[1].desc}/>
    <img src='/Images/Career_laptop.png' alt='team' className={styles.laptop_career}/>
    <Card size={'550px'} displ={'flex'} align={'center'} dept={'190px'} colour={'#1978B2'} logo={data[2].logo} alter={data[2].alter} title={data[2].title} desc={data[2].desc}/>
      </div>
      <div className={styles.container1_career}>
    <img src='/Images/Career_team.png' alt='team' className={styles.team_career}/>
    <Card colour={'#FA4E54'} logo={data[3].logo} alter={data[3].alter} title={data[3].title} desc={data[3].desc}/>
    <Card colour={'#EFA00B'} logo={data[4].logo} alter={data[4].alter} title={data[4].title} desc={data[4].desc}/>
    <img src='/Images/Career_screer.png' alt='screen' className={styles.screen_career}/>
    <Card colour={'#57007B'} logo={data[5].logo} alter={data[5].alter} title={data[5].title} desc={data[5].desc}/>

      </div>

    </div>
    
    </section>
  )
}

export default CareerArea