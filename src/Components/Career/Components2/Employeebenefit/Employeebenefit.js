import React from "react";
import styles from "./Employeebenefit.module.css";
const Employeebenefit = () => {
  const data = [
    {
      url: "Images/Benefit_clock.png",
      alt: "Flexible Timings",
      topic: "Flexible Timings",
      detail:
        "There are no hard and fast rules for office work hours. At the end of the day, the result only matters.",
    },
    {
      url: "Images/Benefits_job.png",
      alt: "Internal Job Switch",
      topic: "Internal Job Switch",
      detail:
"      If you have the passion to grow, a great initiator & shows amazing results, then switching between teams is a piece of cake."},
    {
      url: "Images/Benefits_referal.png",
      alt: "Effective Referral Program",
      topic: "Effective Referral Program",
      detail:
       "Our effective Employee referral program helps to find & hire the best talent through our existing employees’ network."    },    {
      url: "Images/Benefits_paid.png",
      alt: "Generous Paid Time Off",
      topic: "Generous Paid Time Off",
      detail:"Bytebillion employees often enjoy generous paid time off (PTO) policies, including vacation days, sick leave, and holidays. This allows employees to recharge and maintain a healthy work-life balance." }, ];

  return (
    <section className={styles.container_benefits}>
      <div className={styles.heading_benefits}>
        <h1 className={styles.h1_benefits}>
          Employee Benefits At Bytebillion
        </h1>
        <div className={styles.h1underline_benefits}></div>
      </div>
<div className={styles.cards_benefit}>

{data.map((item,index)=>(<div key={index} className={styles.card_benefit}><div className={styles.cardpic_benefit}><img className={styles.pic_benefit} src={item.url} alt={item.alt}/></div><div className={styles.cardtext_benefit}><h2 className={styles.cardtitle_benefit}>{item.topic}</h2><p className={styles.cardpara_benefit}>{item.detail}</p></div></div>))}

</div>

    </section>
  );
};

export default Employeebenefit;
