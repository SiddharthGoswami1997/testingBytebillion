import React from 'react';
import styles from "./FAQchild.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const FAQchild = ({ question, answer, id, show, toggle }) => {
  useEffect(()=> {
    AOS.init({duration: "500"})
  },[])
  return (
    <div className={show ? styles.faqchild2_faq : styles.faqchild1_faq}>
      <div className={styles.ques_faq} onClick={() => toggle(id)}>
      
        <p className={styles.p_faqchild}  data-aos="flip-up"  >{question}</p>
        <span onClick={() => toggle(id)} >
          {show ? <span style={{color:"#575757" , fontSize:"16px"}}><i class="fa-solid fa-angle-up" ></i></span> : <span style={{color:"#575757",fontSize:"16px"}} ><i class="fa-solid fa-angle-down"   ></i></span>}
        </span>
      </div>
      <div className={show || id===3 ? styles.border1_faq : styles.border2_faq} >
        {show && <p className={styles.ans_faq}>{answer}</p>}
               </div>
    </div>
  );
};

export default FAQchild;
