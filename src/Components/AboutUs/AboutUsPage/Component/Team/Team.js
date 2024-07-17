import styles from "./Team.module.css";
import React, { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css"


const details = [
  {
    src: "images/team/swati.png",
    alt: "swati",
    name: "Swati Patidar",
    role: "Software Developer",
  },
  {
    src: "images/team/yash.png",
    alt: "yash",
    name: "Yash Bais",
    role: "Software Developer",
  },
  {
    src: "images/team/aditya.png",
    alt: "aditya",
    name: "Aditya Panwar ",
    role: "Software Developer",
  },
  {
    src: "images/team/vimal.png",
    alt: "vimal",
    name: "Vimal Chouhan",
    role: "Software Developer",
  },
  {
    src: "images/team/narendra.png",
    alt: "Narendra",
    name: "Narendra Patidar",
    role: "Software Developer",
  },
  {
    src: "images/team/vaidik.png",
    alt: "Vaidik",
    name: "Vaidik Chouhan",
    role: "Software Developer",
  },
  {
    src: "images/team/shruti.png",
    alt: "Shruti",
    name: "Shruti Solanki",
    role: "UI/UX  Designer",
  },
  {
    src: "images/team/jiganya.png",
    alt: "Jiganya",
    name: "Jiganya Gupta",
    role: "Software Developer",
  },
  {
    src: "images/team/shivangi.png",
    alt: "Shivangi",
    name: "Shivangi Bangar",
    role: "UI/UX  Designer",
  },
  {
    src: "images/team/kanhaiya.png",
    alt: "Kanhaiya",
    name: "Kanhaiya Patidar",
    role: "Software Developer",
  },
];
const detailsrespo = [
  {
    src: "images/team/swati.png",
    alt: "swati",
    name: "Swati Patidar",
    role: "Software Developer",
  },
  {
    src: "images/team/yash.png",
    alt: "yash",
    name: "Yash Bais",
    role: "Software Developer",
  },
  {
    src: "images/team/aditya.png",
    alt: "aditya",
    name: "Aditya Panwar ",
    role: "Software Developer",
  },
  {
    src: "images/team/vimal.png",
    alt: "vimal",
    name: "Vimal Chouhan",
    role: "Software Developer",
  },
  {
    src: "images/team/narendra.png",
    alt: "Narendra",
    name: "Narendra Patidar",
    role: "Software Developer",
  },
  {
    src: "images/team/vaidik.png",
    alt: "Vaidik",
    name: "Vaidik Chouhan",
    role: "Software Developer",
  },
  {
    src: "images/team/shruti.png",
    alt: "Shruti",
    name: "Shruti Solanki",
    role: "UI/UX  Designer",
  },
  {
    src: "images/team/jiganya.png",
    alt: "Jiganya",
    name: "Jiganya Gupta",
    role: "Software Developer",
  },
  {
    src: "images/team/shivangi.png",
    alt: "Shivangi",
    name: "Shivangi Bangar",
    role: "UI/UX  Designer",
  },
  {
    src: "images/team/kanhaiya.png",
    alt: "Kanhaiya",
    name: "Kanhaiya Patidar",
    role: "Software Developer",
  },
  {
    src: "images/team/swati.png",
    alt: "swati",
    name: "Swati Patidar",
    role: "Software Developer",
  },
];

const Team = () => {

    useEffect(()=> {
        AOS.init({duration: "1300"})
      },[])
      return (
        <>
          {/* <h6 className={styles.team__heading}>Our Tech Experts</h6> */}
          <div className={styles.team__main_box}>
            <div className={styles.team__child_box}>
              <div className={styles.team__left}>
                <h1 className={styles.team__left_heading} data-aos="zoom-in" data-aos-delay="200">Our Team</h1>
                <div className={styles.team__lines}></div>
              </div>
              <div className={styles.team__right}>
                <div className={styles.team__column}>
                {/* <h6 className={styles.team__heading}>Our Tech Experts</h6> */}
    
                  {details.map((member, index) => (
                    <div key={index} className={styles.team__box}>
                      
                      <div className={styles.team__photo}>
                        <img className={styles.team__bigimg} src={member.src} alt={member.alt} />
                      </div>
                      <div className={styles.team__about}>
                        <p className={styles.team__name}>{member.name}</p>
                        <h5 className={styles.team__role}>{member.role}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    
    
    
    
    
            <div className={styles.team_respo_body}>
            <h3 className={styles.team_respo_mainheading}>Our Team</h3>  
    
              <div className={styles.team_respo_container}>
                {detailsrespo.map((member, index) => (
                    <div key={index} className={styles.team_respo_slide_container}>
                      <div className={styles.team_respo_slide_image}>
                        <img className={styles.team_respo_image} src={member.src} alt={member.alt} />
                        
                      </div>
                
                      <div className={styles.team_respo_about}>
                        <p className={styles.team_respo_name}>{member.name}</p>
                        <h5 className={styles.team_respo_role}>{member.role}</h5>
                      </div>
                    </div>
    
                    
    
                  ))}
                </div>
              </div>
        </>
      );
    };
    
    export default Team;