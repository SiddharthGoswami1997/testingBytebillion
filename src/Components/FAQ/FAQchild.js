import React from 'react';
import styles from "./FAQchild.module.css";

const FAQchild = ({ question, answer, id, show, toggle }) => {
  return (
    <div className={show ? styles.faqchild2_faq : styles.faqchild1_faq}>
      <div className={styles.ques_faq} >
      
        <p className={styles.p_faqchild}  data-aos="flip-up" data-aos-delay="100" data-aos-duration="500">{question}</p>
        <span onClick={() => toggle(id)}>
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
