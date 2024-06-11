import React from 'react';
import styles from "./FAQchild.module.css";

const FAQchild = ({ question, answer, id, show, toggle }) => {
  return (
    <div className={show ? styles.faqchild2_faq : styles.faqchild1_faq}>
      <div className={styles.ques_faq}>
        <p>{question}</p>
        <span onClick={() => toggle(id)}>
          {show ? <span>&#9899;</span> : <span>&#9898;</span>}
        </span>
      </div>
      <div className={show ? styles.border1_faq : styles.border2_faq}>
        {show && <p className={styles.ans_faq}>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQchild;
