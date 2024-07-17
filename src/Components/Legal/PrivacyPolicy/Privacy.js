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
         <h5 className={styles.h5}>Terms and Conditions</h5>
         <h4 className={styles.h4}>Welcome to Bytebillion Technology Private Limited!</h4>
       </div>

       <div className={styles.box1}>
        <p className={styles.paras}>These terms and conditions outline the rules and regulations for the use of Bytebillion Technology Private Limited's Website and Services, located at https://www.bytebillion.com/.</p>
        <p className={styles.paras}>By accessing our website and utilizing our services, we assume you accept these terms and conditions. If you do not agree with any part of these terms and conditions, please do not continue to use bytebillion.</p>
        <p className={styles.paras}>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client", "You", and "Your" refer to you, the person using our website and services and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us" refer to Bytebillion Technology Private Limited. "Party", "Parties", or "Us" refer to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect to provision of the Company's stated services, in accordance with and subject to, prevailing law.</p>
       </div>
       <hr className={styles.hr}/>

       <div className={styles.box2}>
        <h6 className={styles.h6}>Use of Phone Numbers for Messaging</h6>
        <p className={styles.paras}>By utilizing our ERP and LMS services, clients may have the option to use their phone numbers for sending messages within the platform. By providing your phone number for this purpose, you agree to abide by all relevant laws and regulations regarding the use of telecommunications and messaging services.</p>
       </div>

       <div className={styles.box3}>
        <h6 className={styles.h6}>License</h6>
        <p className={styles.paras}>Unless otherwise stated, Bytebillion Technology Private Limited and/or its licensors own the intellectual property rights for all material on bytebillion. All intellectual property rights are reserved. You may access this from bytebillion for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <ul className={styles.privacy_ul}>You must not:
            <li className={styles.Privacy_li}>Republish material from bytebillion</li>
            <li className={styles.Privacy_li}>Sell, rent, or sub-license material from bytebillion</li>
            <li className={styles.Privacy_li}>Reproduce, duplicate, or copy material from bytebillion</li>
            <li className={styles.Privacy_li}>Redistribute content from bytebillion</li>
        </ul>
        <p className={styles.paras}>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.</p>
       </div>

       <div className={styles.box4}>
        <h6 className={styles.h6}>Client Responsibilities</h6>
        <p className={styles.paras}>Clients are responsible for maintaining the confidentiality of their login information and ensuring that their phone numbers and messaging services are used in compliance with relevant laws and regulations. Bytebillion Technology Private Limited will not be held liable for any misuse of client phone numbers or messaging services.</p>
       </div><div className={styles.box5}>
        <h6 className={styles.h6}>Content Liability</h6>
        <p className={styles.paras}>We shall not be held responsible for any content that appears on your Website or within our ERP and LMS services. You agree to protect and defend us against all claims that arise from the use of your account, including but not limited to the use of phone numbers for messaging purposes.</p>
       </div>

       <div className={styles.box6}>
         <h6 className={styles.h6}>Reservation of Rights</h6>
         <p className={styles.paras}>We reserve the right to amend these terms and conditions and our linking policy at any time. By continuing to use our Website and services, you agree to be bound by and comply with these changes.</p>
       </div>

       <div className={styles.box7}>
         <h6 className={styles.h6}>Removal of links from our website</h6>
         <p className={styles.paras}>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.</p>
       </div>

       <div className={styles.box8}>
         <h6 className={styles.h6}>Disclaimer</h6>
         <p className={styles.paras}>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of our ERP and LMS services. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation, or any other liability that may not be excluded or limited under applicable law.</p>
         <p className={styles.paras}>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</p>
         <p className={styles.paras}>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
       </div>
     </div> 
    </>
  )
}

export default Privacy