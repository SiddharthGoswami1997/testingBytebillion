// import React from "react";
// import Slider from "react-slick";
// import "./Slidecomp.css";
 // Import the CSS file

// function Slidercomp() {
//   const settings = {
//     dots: false,
//     centerPadding: "60px",
//     className: "center",
//     autoplay: true,
//     centerMode: true,
//     infinite: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
    // adaptiveHeight: true,
   
  // };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className="slide">
//           <div  className="front-side" >
//             <div className="text_slider" ><h2 className="h2_slider">Cloud</h2><p className="p_slider">Transform your business with our Cloud as a Service (CaaS) offerings. Our expert team delivers scalable, secure, and efficient cloud solutions tailored to meet your unique business needs. Leverage the full potential of cloud computing to drive innovation, reduce costs, and enhance performance.</p></div>
//             <img src="/Dummy/cloud.png" alt="cloud" className="img_slider"/>
//           </div>
//           <div className="back-side" >
//           <img src="/Dummy/cloud.png" alt="cloud" className="img_slider"/>
//           <h2 className="h2_slider">Cloud</h2>
//           </div>
//         </div>
//         <div className="slide">
//         <div  className="front-side" >
//             <div className="text_slider" ><h2 className="h2_slider">Web Development</h2><p className="p_slider">Build a Powerful Online Presence with Our Expert Website Development Services
//             Elevate your business with our top-notch website development solutions. Our skilled team specializes in creating responsive, user-friendly, and visually appealing websites tailored to meet your unique business needs.</p></div>
//             <img src="/Dummy/web.png" alt="web" className="img_slider"/>
//            </div>
//             <div className="back-side" >
//           <img src="/Dummy/web.png" alt="web" className="img_slider"/>
//           <h2 className="h2_slider">Web Development</h2>
//           </div>
//           </div>
//         <div className="slide">
//         <div  className="front-side" >
//             <div className="text_slider" ><h2 className="h2_slider">Mobile Development </h2><p className="p_slider"> Transform Your Ideas into Reality with Our Expert App Development Service.  Unleash the potential of your business with our cutting-edge app development solutions. Our experienced team specializes in creating high-performance, scalable, and user-friendly mobile and web applications tailored to meet your specific needs.</p></div>
//             <img src="/Dummy/mobile.png" alt="mobile" className="img_slider"/>
//           </div>  
          
//           <div className="back-side" >
//           <img src="/Dummy/mobile.png" alt="wemobileb" className="img_slider"/>
//           <h2 className="h2_slider">Mobile Development</h2>
//           </div>        </div>

//         <div className="slide">
//         <div  className="front-side" >
//             <div className="text_slider" ><h2 className="h2_slider">UI/UX Development</h2><p className="p_slider">Transform your digital products with our professional UI/UX design solutions. Our experienced team creates visually stunning and highly intuitive interfaces that offer an exceptional user experience, ensuring your product stands out in a competitive market.</p></div>
//             <img src="/Dummy/uiux.png" alt="uiux" className="img_slider"/>
//           </div>
//           <div className="back-side" >
//           <img src="/Dummy/uiux.png" alt="uiux" className="img_slider"/>
//           <h2 className="h2_slider">UI/UX Development</h2>
//           </div>      
//             </div>
//         <div className="slide">
//         <div  className="front-side" >
//             <div className="text_slider" ><h2 className="h2_slider">Machine Learning</h2><p className="p_slider">Unlock the full potential of your data with our Machine Learning as a Service (MLaaS). Our expert team delivers cutting-edge machine learning solutions that drive innovation, enhance decision-making, and boost operational efficiency.</p></div>
//             <img src="/Dummy/machine.png" alt="machine" className="img_slider"/>
//           </div> 
//           <div className="back-side" >
//           <img src="/Dummy/machine.png" alt="machine" className="img_slider"/>
//           <h2 className="h2_slider">Machine Learning</h2>
//           </div>    
//                 </div>
//         <div className="slide">
//         <div  className="front-side" >
//             <div className="text_slider" ><h2 className="h2_slider">MERN Stack</h2><p className="p_slider">Transform your digital presence with our comprehensive MERN stack development services. Our expert team leverages the power of MongoDB, Express.js, React, and Node.js to deliver high-performance, scalable, and secure web applications tailored to your business needs.</p></div>
//             <img src="/Dummy/mern.png" alt="mern" className="img_slider"/>
//           </div>  
//           <div className="back-side" >
//           <img src="/Dummy/mern.png" alt="mern" className="img_slider"/>
//           <h2 className="h2_slider">MERN Stack</h2>
//           </div>       
//            </div>
//       </Slider>
//     </div>
//   );
// }

// export default Slidercomp;


// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay} from 'swiper/modules';
// import './Centerslider.css'
import styles from "./Slidecomp.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
import React,{useEffect} from "react";

// import SwiperButton from "./SwiperButton";


const Slidercomp = () => {
  useEffect(()=> {
    AOS.init({duration: "400000"})
  },[])
  return (
    <div className={styles.complete_}>
<div className={styles.box1_}>

<Swiper

        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        // breakpoints = {{
        //   300:{
        //     slidesPerView:1,
        //     spaceBetween:20, 
        //   },
        //   480:{slidesPerView:2,
        //     spaceBetween:20,
        //   },
        //   745:{slidesPerView:2,
        //     spaceBetween:20,
        //   },
        //   1120:{slidesPerView:2,
        //     spaceBetween:20,
        //   }
        // }}
      
      
          
          
        

        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
          
          // pauseOnMouseEnter: true,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Autoplay,]}
        className='mySwiper'
      >

        <div className={styles.slides_box1}>
        <SwiperSlide> 
        <div className={styles.slide_box1}>
          <img src="/Dummy/mern.png" alt="mern" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>MERN Stack</h2>
          </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.slide_box1}>
          <img src="/Dummy/cloud.png" alt="cloud" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Cloud</h2>
          </div>    
        </SwiperSlide>
        <SwiperSlide>  

        <div className={styles.slide_box1}>
          <img src="/Dummy/web.png" alt="web" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Web Development</h2>
          </div>    
        </SwiperSlide>

       
        <SwiperSlide> 
        <div className={styles.slide_box1}>
          <img src="/Dummy/mobile.png" alt="wemobileb" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Mobile Development</h2>
          </div>      

        </SwiperSlide>
        <SwiperSlide>   
        <div className={styles.slide_box1}>
          <img src="/Dummy/uiux.png" alt="uiux" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>UI/UX Development</h2>
          </div> 
        </SwiperSlide>
        <SwiperSlide>   
        <div className={styles.slide_box1}>
          <img src="/Dummy/machine.png" alt="machine" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Machine Learning</h2>
          </div> 
        </SwiperSlide>
       
        
        </div>
        
          
      </Swiper>


</div>
<div className={styles.box2_} data-aos="zoom-in" >

<Swiper

        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        // breakpoints = {{
        //   300:{
        //     slidesPerView:1,
        //     spaceBetween:20, 
        //   },
        //   480:{slidesPerView:2,
        //     spaceBetween:20,
        //   },
        //   745:{slidesPerView:2,
        //     spaceBetween:20,
        //   },
        //   1120:{slidesPerView:2,
        //     spaceBetween:20,
        //   }
        // }}
      
      
          
          
        

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          
        //   pauseOnMouseEnter: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay,]}
        className='mySwiper'
      >

        <div className={styles.slides_box2}>
        <SwiperSlide>
        <div className={styles.centerslide_box2}><div className={styles.text_box2} ><h2 className={styles.h2_box2}>Cloud</h2><p className={styles.p_box2}>Transform your business with our Cloud as a Service (CaaS) offerings. Our expert team delivers scalable, secure, and efficient cloud solutions tailored to meet your unique business needs. Leverage the full potential of cloud computing to drive innovation, reduce costs, and enhance performance.</p></div>
           <div className={styles.imgbox_box2}>
             <img src="/Dummy/cloud.png" alt="cloud" className={styles.img_box2}/>
            
            </div>
          </div>    
        </SwiperSlide>
        <SwiperSlide>  

        <div  className={styles.centerslide_box2} >
            <div className={styles.text_box2} ><h2 className={styles.h2_box2}>Web Development</h2><p className={styles.p_box2}>Build a Powerful Online Presence with Our Expert Website Development Services
            Elevate your business with our top-notch website development solutions. Our skilled team specializes in creating responsive, user-friendly, and visually appealing websites tailored to meet your unique business needs.</p></div>
            <div className={styles.imgbox_box2}>
            <img src="/Dummy/web.png" alt="web" className={styles.img_box2}/>
           </div>
           </div>    
        </SwiperSlide>

       
        <SwiperSlide> 
        <div className={styles.centerslide_box2}  >
            <div className={styles.text_box2} ><h2 className={styles.h2_box2}>Mobile Development </h2><p className={styles.p_box2}> Transform Your Ideas into Reality with Our Expert App Development Service.  Unleash the potential of your business with our cutting-edge app development solutions. Our experienced team specializes in creating high-performance, scalable, and user-friendly mobile and web applications tailored to meet your specific needs.</p></div>
            <div className={styles.imgbox_box2}>
            <img src="/Dummy/mobile.png" alt="mobile" className={styles.img_box2}/>
         </div>
          </div>    

        </SwiperSlide>
        <SwiperSlide>   
        <div  className={styles.centerslide_box2} >
            <div className={styles.text_box2} ><h2 className={styles.h2_box2}>UI/UX Development</h2><p className={styles.p_box2}>Transform your digital products with our professional UI/UX design solutions. Our experienced team creates visually stunning and highly intuitive interfaces that offer an exceptional user experience, ensuring your product stands out in a competitive market.</p></div>
            <div className={styles.imgbox_box2}>
           
            <img src="/Dummy/uiux.png" alt="uiux" className={styles.img_box2}/>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>   
        <div className={styles.centerslide_box2}  >
            <div className={styles.text_box2} ><h2 className={styles.h2_box2}>Machine Learning</h2><p className={styles.p_box2}>Unlock the full potential of your data with our Machine Learning as a Service (MLaaS). Our expert team delivers cutting-edge machine learning solutions that drive innovation, enhance decision-making, and boost operational efficiency.</p></div>
            <div className={styles.imgbox_box2}>
            <img src="/Dummy/machine.png" alt="machine" className={styles.img_box2}/>
         </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide> 
        <div className={styles.centerslide_box2}  >
            <div className={styles.text_box2} ><h2 className={styles.h2_box2}>MERN Stack</h2><p className={styles.p_box2}>Transform your digital presence with our comprehensive MERN stack development services. Our expert team leverages the power of MongoDB, Express.js, React, and Node.js to deliver high-performance, scalable, and secure web applications tailored to your business needs.</p></div>
            <div className={styles.imgbox_box2}>
            <img src="/Dummy/mern.png" alt="mern" className={styles.img_box2}/>
         </div>
          </div>   
        </SwiperSlide>
        
        </div>
        
          
      </Swiper>


</div>
<div className={styles.box3_}>

<Swiper

        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        // breakpoints = {{
        //   300:{
        //     slidesPerView:1,
        //     spaceBetween:20, 
        //   },
        //   480:{slidesPerView:2,
        //     spaceBetween:20,
        //   },
        //   745:{slidesPerView:2,
        //     spaceBetween:20,
        //   },
        //   1120:{slidesPerView:2,
        //     spaceBetween:20,
        //   }
        // }}
      
      
          
          
        

        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
          
        //   pauseOnMouseEnter: true,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Autoplay,]}
        className='mySwiper'
      >

        <div className={styles.slides_box1}>
       
        <SwiperSlide>  

        <div className={styles.slide_box1}>
          <img src="/Dummy/web.png" alt="web" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Web Development</h2>
          </div>    
        </SwiperSlide>

       
        <SwiperSlide> 
        <div className={styles.slide_box1}>
          <img src="/Dummy/mobile.png" alt="wemobileb" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Mobile Development</h2>
          </div>      

        </SwiperSlide>
        <SwiperSlide>   
        <div className={styles.slide_box1}>
          <img src="/Dummy/uiux.png" alt="uiux" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>UI/UX Development</h2>
          </div> 
        </SwiperSlide>
        <SwiperSlide>   
        <div className={styles.slide_box1}>
          <img src="/Dummy/machine.png" alt="machine" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Machine Learning</h2>
          </div> 
        </SwiperSlide>
        <SwiperSlide> 
        <div className={styles.slide_box1}>
          <img src="/Dummy/mern.png" alt="mern" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>MERN Stack</h2>
          </div>  
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.slide_box1}>
          <img src="/Dummy/cloud.png" alt="cloud" className={styles.img_box1}/>
          <h2 className={styles.h2_box1}>Cloud</h2>
          </div>    
        </SwiperSlide>
        
        </div>
        
          
      </Swiper>


</div>
    </div>
  )
}

export default Slidercomp




