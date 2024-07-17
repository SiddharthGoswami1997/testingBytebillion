import styles from "./Testimonial.module.css"
import Review from "./Review/Review"

const Testimonial = () => {
  return (
    <div className={styles.main_container}>
        
        <div className={styles.heading}>
            <h2>TESTIMONIALS & REVIEWS</h2>
        </div>

        <div className={styles.review}>
        <Review/>
        {/* <Review/>
        <Review/>
        <Review/> */}

        </div>
    </div>
  )
}

export default Testimonial