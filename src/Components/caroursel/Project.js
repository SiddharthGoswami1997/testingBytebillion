import React from 'react'
import styles from './Project.module.css'
import Slidercomp from './Slidercomp'

const Projects = () => {
   
      
  return (
    <div className={styles.container_project}>
        <h1 className={styles.h1_project}>Services</h1>
        <p className={styles.p_project}>Bytebillion takes pride in its developers' expertise in various programming languages, frameworks, tools, libraries, and technologies, enabling us to create exceptional IT solutions for web and mobile applications.</p>

        <div >
           
         <Slidercomp/>

           
        </div>
    </div>
  )
}

export default Projects