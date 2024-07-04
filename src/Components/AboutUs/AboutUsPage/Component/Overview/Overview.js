import styles from "./Overview.module.css"
const Overview = () => {
  return (
    <>
    <div className={styles.overview__main_box}>
      <div className={styles.overview__left_box}>
      <h4 className={styles.overview__heading}>Overview</h4>
      <p className={styles.overview__textone}>Byte Billion is a leading technology company headquartered in Indore, with a strong focus on delivering innovative solutions to businesses globally. Our team of experts is committed to push the boundaries of technology and providing top-notch services tailored to meet the unique needs of our clients. Founded with a vision to revolutionize the IT industry, Byte Billion has evolved into a powerhouse of creativity and innovation. Our journey has been marked by a relentless pursuit of excellence, fueled by a passion for transforming ideas into reality. We believe in the power of technology to drive business success.</p>
      <p className={styles.overview__texttwo}>At Byte Billion, we take pride in our diverse team of talented professionals who specialize in a range of cutting-edge technologies. From MERN stack to machine learning, we have the expertise to tackle even the most complex challenges. Our collaborative approach ensures that we leverage the collective knowledge and skills of our team to deliver exceptional results for our clients.</p>
      </div>
      <div className={styles.overview__right_box}>
       <img className={styles.overview__img} src="/Images/AboutUsPage/aboutuspage_overview.png" alt="overview"/>
      </div>
    </div>
    
    </>
  )
}

export default Overview