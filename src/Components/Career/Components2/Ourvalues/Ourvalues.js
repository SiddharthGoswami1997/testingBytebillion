import {React,useEffect} from "react";
import styles from "./Ourvalues.module.css";
import AOS from 'aos'
import "aos/dist/aos.css"

const Ourvalues = () => {

  useEffect(()=> {
    AOS.init({duration: "3000"})
  },[])

  const data = [
    {
      url: "Images/ourvalues_innovation.png",
      alt: "innovation",
      topic: "Innovation",
      detail:
        "We embrace creativity and encourage the development of new ideas and solutions that drive technological advancement.",
    },
    {
      url: "Images/ourvalues_excellence.png",
      alt: "Excellence",
      topic: "Excellence",
      detail:
        "We aim for excellence in every aspect of our work, continuously improving and setting new standards in the industry.",
    },
    {
      url: "Images/ourvalues_agility.png",
      alt: "Agility",
      topic: "Agility",
      detail:
        "We are adaptable and responsive to the dynamic nature of the technology landscape, ready to pivot and embrace change as needed.",
    },
    {
      url: "Images/ourvalues_clientvalue.png",
      alt: "Client Value",
      topic: "Client Value Creation",
      detail:
        "We measure our success through our client’s impact. We deliver what we promise leading to long-term relationships",
    },
  ];

  return (
    <>
    <section className={styles.container_ourvalues}>
      <div className={styles.heading_ourvalues}>
        <h1 className={styles.h1_ourvalues}>Our Values</h1>
        <div className={styles.h1underline_ourvalues}></div>
      </div>
      <div className={styles.cards_ourvalues}>
        {data.map((item, index) => (
          <div className={styles.card_ourvalues} key={index} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
            <img
              src={item.url}
              alt={item.alt}
              className={styles.cardpic_ourvalues}
            />
            <h2 className={styles.cardtitle_ourvalues}>{item.topic}</h2>
            <p className={styles.cardpara_ourvalues}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
    <section className={styles.responsivecontainer_ourvalues}>
      <div className={styles.heading_ourvalues}>
        <h1 className={styles.h1_ourvalues}>Our Values</h1>
        <div className={styles.h1underline_ourvalues}></div>
      </div>
      <div className={styles.cards_ourvalues}>
        {data.map((item, index) => (
          <div className={styles.card_ourvalues} key={index} >
            <img
              src={item.url}
              alt={item.alt}
              className={styles.cardpic_ourvalues}
            />
            <h2 className={styles.cardtitle_ourvalues}>{item.topic}</h2>
            <p className={styles.cardpara_ourvalues}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Ourvalues;
