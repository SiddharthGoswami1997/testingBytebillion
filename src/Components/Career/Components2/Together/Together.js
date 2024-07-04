import React from 'react'
import styles from './Together.module.css'
const Together = () => {
  return (
    <main className={styles.container_together}>
        <div className={styles.content1_together}>
            <h1 className={styles.h1_together}>LEARN,SHARE AND GROW </h1>
            <h1 className={styles.handshakeh1_together}>T<img className={styles.handshakeimg_together} src='/Images/together_handshake.png' alt='handshake'/>GETHER</h1>
        </div>
        <div className={styles.content2_together}>
        <div className={styles.content2box_together}>
            <div className={styles.womenwithlaptop_together}>
              <img className={styles.womenwithlaptopimg_together} src="/Images/together_womenwithlaptop.png" alt="women" />
            </div>
            <div className={styles.larrow_together}>
              <img className={styles.larrowimg_together} src="/Images/together_larrow.png" alt="arrow" />
            </div>
            <div className={styles.marrow_together}>
              <img className={styles.marrowimg_together} src="/Images/together_marrow.png" alt="arrow" />
            </div>
            <div className={styles.sarrow_together}>
              <img className={styles.sarrowimg_together} src="/Images/together_sarrow.png" alt="arrow" />
            </div>
            <div className={styles.tab_together}>
              <img className={styles.tabimg_together} src="/Images/Career_speedgrowth.png" alt="tab" />
            </div>
            
          </div>
        </div>

    </main>
  )
}

export default Together