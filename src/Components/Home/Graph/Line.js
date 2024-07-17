import React from 'react'
import styles from './Line.module.css'
const Line = () => {
  return (
    <div className={styles.container_line}>
        <div><p>+75.24%</p></div>
        <div className={styles.horizontalbar_line}>
            <div className={styles.greenbar_line} ></div>
            </div>
        <div><p>Last 30 days Business Growth</p></div>
    </div>
  )
}

export default Line