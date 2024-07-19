import styles from './Privacy.module.css'
import { useEffect } from 'react';

const Privacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
   


<>
<div className={styles.container}>

  <div className={styles.heading}>
    <h3 className={styles.h3}>Bytebillion Technology Private Limited Privacy Policy</h3>
    <div className={styles.lastUpdate}>Last updated: May 07, 2024</div>
  </div>

  <div className={styles.box1}>
     <h3 className={styles.h3}>1. Overview</h3>
     <p className={styles.paragraph}>Our services enable seamless interaction between businesses and their clients via WhatsApp, as part of the WhatsApp Business Services defined under the WhatsApp Business Terms of Service. By using our services to manage your communications on WhatsApp, you agree to adhere to the WhatsApp Business Messaging Policy, WhatsApp Messaging Guidelines, and the WhatsApp Business Terms of Service.</p>
  </div>

  <div className={styles.box2}>
    <h3 className={styles.h3}>2. Compliance with WhatsApp Business Messaging Policy</h3>
    <ul className={styles.unorderlist}>Our use of WhatsApp Business Services for sending messages on behalf of our clients is governed by the following guidelines:
    <li className={styles.list}>Quality Experience:We maintain an accurate WhatsApp Business profile and ensure all client communication is genuine, transparent, and professional. We do not impersonate other businesses nor mislead customers regarding the nature of your business or its offerings.</li>
    <li className={styles.list}>Opt-In Requirement:We only contact individuals on WhatsApp who have explicitly opted in to receive messages from you. The opt-in process clearly states the nature of messages they will receive and the business they are opting in to receive messages from.</li>
    <li className={styles.list}>Data Handling and Privacy:We are committed to securing necessary consents to collect, use, and share personal data in accordance with applicable laws and our published privacy policy.</li>
    </ul>
  </div>

  <div className={styles.box3}>
    <h3 className={styles.h3}>3. Specific Use of WhatsApp Business Platform</h3>
    <ul className={styles.unorderlist}>
       <li className={styles.list}>Message Templates:We use approved message templates for initiating conversations and respond to messages based on user interaction within the stipulated time frame as outlined by WhatsApp.</li>
       <li className={styles.list}>Data Usage:We ensure that any data obtained from WhatsApp is used solely for purposes necessary to facilitate your messaging needs, such as order updates, promotional offers, or customer support inquiries (be specific based on your services).</li>
    </ul>
  </div>

  <div className={styles.box4}>
    <h3 className={styles.h3}>4. Prohibited Uses</h3>
    <ul className={styles.unorderlist}>Our services do not support the use of WhatsApp for activities such as:
      <li className={styles.list}>Exchanging illegal goods or services</li>
      <li className={styles.list}>Promoting harmful or misleading content</li>
      <li className={styles.list}>Violating intellectual property rights</li>
      <li className={styles.list}>Any other use restricted by WhatsApp's policies</li>
   </ul>
   <p className={styles.paragraph}>We rigorously enforce these rules to ensure compliance with legal standards and WhatsApp's operational guidelines.</p>
  </div>
<div className={styles.box5}>
   <h3 className={styles.h3}>5. Data Protection and User Rights</h3>
   <ul className={styles.unorderlist}>
     <li className={styles.list}>Data Retention:We retain personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy and to provide the services you have requested, unless otherwise required by law.</li>
     <li className={styles.list}>User Rights:Users can request access to, correction of, or deletion of their personal data managed by us. Users can also withdraw consent at any time, subject to legal or contractual restrictions.</li>
   </ul>
  </div>

  <div className={styles.box6}>
    <h3 className={styles.h3}>6. Security Measures</h3>
    <p className={styles.paragraph}>We take the security of your data seriously and implement appropriate technical and organizational measures to protect personal data against unauthorized or unlawful processing and accidental loss, destruction, or damage. These measures may include encryption, access controls, and regular security reviews.</p>
  </div>

  <div className={styles.box7}>
    <h3 className={styles.h3}>7. Sub-processors</h3>
    <p className={styles.paragraph}>If we utilize any third-party services for data processing, we ensure they follow similar data protection standards as outlined in this policy. A list of sub-processors can be obtained upon request.</p>
  </div>

  <div className={styles.box8}>
    <h3 className={styles.h3}>8. International Compliance</h3>
    <p className={styles.paragraph}>If our services operate globally, we comply with relevant international data privacy regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
  </div>

  <div className={styles.box9}>
   <h3 className={styles.h3}>9. Changes to the Privacy Policy</h3>
   <p className={styles.paragraph}>We may update this policy to reflect changes to our data management practices, legal requirements, or WhatsApp's guidelines. Clients will be notified of any significant changes through standard communication channels.</p>
  </div>

  <div className={styles.box10}>
    <h3 className={styles.h3}>10. Contact Information</h3>
    <p className={styles.paragraph}>If you have questions about this policy or our practices related to WhatsApp Business Services, please contact us at infokaromanage@gmail.com.</p>
  </div>
  
  <div className={styles.box11}>
   <h3 className={styles.h3}>11. Agreement and Acknowledgment</h3>
   <p className={styles.paragraph}>By utilizing our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
  </div>
</div>
</>

  )
}

export default Privacy