import React, { useState } from 'react';
import faq_questions from './Faqapi';
import FAQchild from './FAQchild';
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={styles.container_faq}>
      <h1 className={styles.h1_faq}>FAQ</h1>
      <div className={styles.item_faq}>
        {faq_questions.map((item) => (
          <FAQchild
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            show={activeId === item.id}
            toggle={toggle}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
