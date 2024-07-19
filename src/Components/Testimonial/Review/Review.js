import styles from "./Review.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Review = () => {

  useEffect(()=> {
    AOS.init({duration: "1500"})
  },[])

  return (


          // <div className={styles.reviews_box}>


            <div className={styles.review_single_box} data-aos="zoom-out" >
                <div className={styles.clint_name}>
                <h4>ClIENT NAME</h4>
                </div>
                <div className={styles.clint_text}>
                <p>viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec .</p>
                </div>
               <div className={styles.lines}></div>

                <div className={styles.masks_group}>
                  <div className={styles.clint_img}><img src="/Images/Testimonial/clintphoto.png" alt="clint"/></div>
                  <div className={styles.clint_logo}>S</div>
                </div>
            </div>

      


        //  </div>

  )
}

export default Review