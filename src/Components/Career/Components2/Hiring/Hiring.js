import React from 'react'
import styles from './Hiring.module.css'
import AnimatedSerial from './AnimatedSerial/AnimatedSerial'


const Hiring = () => {

  const data1 =[{value:"We value & respect individual’s time."},
    {value:"Our entire hiring process completes within a day"},
    {value:"Get feedback on the same day with no gimmick or false hopes."},
  ]
  const data2 =[{value:"Interviews are more like a conversation providing a comfortable enviroment."},
    {value:"Ensuring a quick & smooth on-boarding process."},
    {value:"System tests checks your problem solving ability not the end result."},
  ]
  const data3 =[{value:"We offer attractive internship program for smooth transmission."},
    {value:"Hire interns based on their performance & passion."},
    {value:"6 months provides challenging real-time projects & team-building skills."},
  ]
  return (
    <section className={styles.container_benefits}>
      <div className={styles.heading_benefits}>
        <h1 className={styles.h1_benefits}>
        Hiring Process
        </h1>
        <div className={styles.h1underline_benefits}></div>
      </div>

      <div className={styles.content_benefits}>
        <div className={styles.result_benefits}>
            <div><AnimatedSerial serial={'01'}/></div>
            <p className={styles.contentheading_benefits}>Same Day Result</p>
            <div className={styles.box_benefits}>
              {data1.map((item,index)=>(<div className={styles.line_benefits}><span key={index} style={{color:"#f584345b"}}>&#x25C6;</span><p className={styles.contentpara_benefits}>{item.value}</p></div>))}
              </div>
        </div>
        <div className={styles.result_benefits}>
            <div><AnimatedSerial serial={'02'}/></div>
            <p className={styles.contentheading_benefits}>Simple And Straigntforward</p>
            <div className={styles.box_benefits}>
              {data2.map((item,index)=>(<div className={styles.line_benefits}><span key={index} style={{color:"#f584345b"}}>&#x25C6;</span><p>{item.value}</p></div>))}
              </div>
        </div>
        <div className={styles.result_benefits}>
            <div><AnimatedSerial serial={'03'}/></div>
            <p className={styles.contentheading_benefits}>Simple And Straigntforward</p>
            <div className={styles.box_benefits}>
              {data3.map((item,index)=>(<div className={styles.line_benefits}><span key={index} style={{color:"#f584345b"}}>&#x25C6;</span><p>{item.value}</p></div>))}
              </div>
        </div>
      </div>
      </section>
  )
}

export default Hiring