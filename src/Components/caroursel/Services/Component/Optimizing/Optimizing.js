import styles from "./Optimizing.module.css";

const Optimizing = () => {
  return (
    <div className={styles.optimizing__container}>
      <div className={styles.optimizing__left}>
        <h2 className={styles.optimizing__heading}>Optimizing talent acquisition with superior IT staff augmentation services</h2>
         <hr className={styles.optimizing__lines}/>
      </div>

      <div className={styles.optimizing__right}>
        <p className={styles.optimizing__text1}>Need to bridge a skill gap in your development team or scale up resources for a specific project? Byte Billion`s Staff Augmentation service provides you with highly qualified and experienced developers on a contractual basis. We understand the challenges of finding the right talent, and our team of experts will seamlessly integrate with your existing team, ensuring a smooth and efficient workflow.</p>
        <p className={styles.optimizing__text2}>We help organizations to augment their in-house development team, without an expensive hiring process. With our IT staff augmentation, businesses can scale their IT capabilities readily, tackle new projects, expand into new markets, and keep pace with changing business demands.</p>
      </div>
    </div>
  );
};

export default Optimizing;