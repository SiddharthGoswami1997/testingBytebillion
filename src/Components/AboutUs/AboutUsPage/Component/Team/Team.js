import styles from "./Team.module.css";
// import React, { useRef, useEffect } from "react";


const details = [
  {
    src: "/Images/Team/swati.png",
    alt: "swati image",
    name: "Swati Patidar",
    role: "Software Developer",
  },
  {
    src: "/Images/Team/yash.png",
    alt: "yash image",
    name: "Yash Bais",
    role: "Software Developer",
  },
  {
    src: "/Images/Team/aditya.png",
    alt: "aditya image",
    name: "Aditya Panwar ",
    role: "Software Developer",
  },
  {
    src: "/Images/Team/vimal.png",
    alt: "vimal image",
    name: "Vimal Chouhan",
    role: "Software Developer",
  },
  {
    src: "/Images/Team/narendra.png",
    alt: "Narendra image",
    name: "Narendra Patidar",
    role: "Software Developer",
  },
  {
    src: "/Images/Team/vaidik.png",
    alt: "Vaidik image",
    name: "Vaidik Chouhan",
    role: "Software Developer",
  },
  {
    src: "/Images/Team/shruti.png",
    alt: "Shruti image",
    name: "Shruti Solanki",
    role: "UI/UX  Designer",
  },
  {
    src: "/Images/Team/jiganya.png",
    alt: "Jiganya image",
    name: "Jiganya Gupta",
    role: "Software Developer",
  },
  {
    src: "/Images/Team/shivangi.png",
    alt: "Shivangi image",
    name: "Shivangi Bangar",
    role: "UI/UX  Designer",
  },
  {
    src: "/Images/Team/kanhaiya.png",
    alt: "Kanhaiya image",
    name: "Kanhaiya Patidar",
    role: "Software Developer",
  },
];

const Team = () => {

  // const teamColumnRef = useRef(null);
  
  // useEffect(() => {
  //   if (teamColumnRef.current) {
  //     const copy = teamColumnRef.current.cloneNode(true);
  //     teamColumnRef.current.parentNode.appendChild(copy);
  //   }
  // }, []);


  return (
    <>
      {/* <h6 className={styles.team__heading}>Our Tech Experts</h6> */}
      <div className={styles.team__main_box}>
        <div className={styles.team__child_box}>
          <div className={styles.team__left}>
            <h1 className={styles.team__left_heading}>Our Team</h1>
            <div className={styles.team__lines}></div>
          </div>
          <div className={styles.team__right}>
            <div className={styles.team__column}>
            {/* <h6 className={styles.team__heading}>Our Tech Experts</h6> */}

              {details.map((member, index) => (
                <div key={index} className={styles.team__box}>
                  
                  <div className={styles.team__photo}>
                    <img src={member.src} alt={member.alt} />
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





      <div className={styles.team_respo_box}>
          <h2 className={styles.team_respo_mainheading}>Our Team</h2>
          <div className={styles.team_respo_slider}>
            {details.map((member, index) => (
                <div key={index} className={styles.team_respo_box_inner}>
                  <div className={styles.team_respo_photo}>
                    <img src={member.src} alt={member.alt} />
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