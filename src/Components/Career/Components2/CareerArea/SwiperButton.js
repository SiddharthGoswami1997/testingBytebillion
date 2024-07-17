import React from 'react'
import { useSwiper } from 'swiper/react'
import styles from './SwiperButton.module.css'

const SwiperButton = () => {

const swiper = useSwiper();

  return (
    <div className={styles.btnbox_swiper}>

<button onClick={()=> swiper.slidePrev()} className={styles.btn_swiper}>
<i class="fa-solid fa-angle-left"></i>
        </button>
        <button onClick={()=> swiper.slideNext()} className={styles.btn_swiper}>
        <i class="fa-solid fa-angle-right"></i>
        </button>
        
        </div>
  )
}

export default SwiperButton