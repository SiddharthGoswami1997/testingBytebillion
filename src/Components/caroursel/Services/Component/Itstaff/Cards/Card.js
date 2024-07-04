import React from "react";
import styles from "./Card.module.css";
const Card = ({
  colour,
  logo,
  alter,
  title,
  desc,
 
}) => {
  return (
    <div
      className={styles.box_card}
      style={{
        border: `1px solid ${colour}`,
       
      }}
    >
      <div className={styles.heading_card}>
      
        <img src={logo} alt={alter} className={styles.img_card} />
        <p className={styles.title_card}>{title}</p>
      </div>
      <p className={styles.content_card}>{desc}</p>
    </div>
  );
};

export default Card;
