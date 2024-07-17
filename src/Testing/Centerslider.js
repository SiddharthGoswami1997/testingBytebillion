// // import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination,Autoplay} from 'swiper/modules';
// import './Centerslider.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css'
// import React,{useEffect} from "react";

// // import SwiperButton from "./SwiperButton";


// const Centerslider = () => {
//   useEffect(()=> {
//     AOS.init({duration: "4000"})
//   },[])
//   return (
//     <div className='complete_'>
// <div className='box1_'>

// <Swiper

//         loop={true}
//         slidesPerView={1}
//         spaceBetween={20}
//         // breakpoints = {{
//         //   300:{
//         //     slidesPerView:1,
//         //     spaceBetween:20, 
//         //   },
//         //   480:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   },
//         //   745:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   },
//         //   1120:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   }
//         // }}
      
      
          
          
        

//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
          
//         //   pauseOnMouseEnter: true,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         modules={[Autoplay,]}
//         className='mySwiper'
//       >

//         <div className='slides_box1'>
//         <SwiperSlide> 
//         <div className='slide_box1'>
//           <img src="/Dummy/mern.png" alt="mern" className="img_box1"/>
//           <h2 className="h2_box1">MERN Stack</h2>
//           </div>  
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='slide_box1'>
//           <img src="/Dummy/cloud.png" alt="cloud" className="img_box1"/>
//           <h2 className="h2_box1">Cloud</h2>
//           </div>    
//         </SwiperSlide>
//         <SwiperSlide>  

//         <div className='slide_box1'>
//           <img src="/Dummy/web.png" alt="web" className="img_box1"/>
//           <h2 className="h2_box1">Web Development</h2>
//           </div>    
//         </SwiperSlide>

       
//         <SwiperSlide> 
//         <div className='slide_box1'>
//           <img src="/Dummy/mobile.png" alt="wemobileb" className="img_box1"/>
//           <h2 className="h2_box1">Mobile Development</h2>
//           </div>      

//         </SwiperSlide>
//         <SwiperSlide>   
//         <div className='slide_box1'>
//           <img src="/Dummy/uiux.png" alt="uiux" className="img_box1"/>
//           <h2 className="h2_box1">UI/UX Development</h2>
//           </div> 
//         </SwiperSlide>
//         <SwiperSlide>   
//         <div className='slide_box1'>
//           <img src="/Dummy/machine.png" alt="machine" className="img_box1"/>
//           <h2 className="h2_box1">Machine Learning</h2>
//           </div> 
//         </SwiperSlide>
       
        
//         </div>
        
          
//       </Swiper>


// </div>
// <div className='box2_' data-aos="zoom-in" >

// <Swiper

//         loop={true}
//         slidesPerView={1}
//         spaceBetween={20}
//         // breakpoints = {{
//         //   300:{
//         //     slidesPerView:1,
//         //     spaceBetween:20, 
//         //   },
//         //   480:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   },
//         //   745:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   },
//         //   1120:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   }
//         // }}
      
      
          
          
        

//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
          
//         //   pauseOnMouseEnter: true,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         modules={[Autoplay,]}
//         className='mySwiper'
//       >

//         <div className='slides_box2'>
//         <SwiperSlide>
//         <div className='centerslide_box2'  >
//             <div className="text_box2" ><h2 className="h2_box2">Cloud</h2><p className="p_box2">Transform your business with our Cloud as a Service (CaaS) offerings. Our expert team delivers scalable, secure, and efficient cloud solutions tailored to meet your unique business needs. Leverage the full potential of cloud computing to drive innovation, reduce costs, and enhance performance.</p></div>
//            <div className="imgbox_box2">
//              <img src="/Dummy/cloud.png" alt="cloud" className="img_box2"/>
            
//             </div>
//           </div>    
//         </SwiperSlide>
//         <SwiperSlide>  

//         <div  className='centerslide_box2' >
//             <div className="text_box2" ><h2 className="h2_box2">Web Development</h2><p className="p_box2">Build a Powerful Online Presence with Our Expert Website Development Services
//             Elevate your business with our top-notch website development solutions. Our skilled team specializes in creating responsive, user-friendly, and visually appealing websites tailored to meet your unique business needs.</p></div>
//             <div className="imgbox_box2">
//             <img src="/Dummy/web.png" alt="web" className="img_box2"/>
//            </div>
//            </div>    
//         </SwiperSlide>

       
//         <SwiperSlide> 
//         <div className='centerslide_box2'  >
//             <div className="text_box2" ><h2 className="h2_box2">Mobile Development </h2><p className="p_box2"> Transform Your Ideas into Reality with Our Expert App Development Service.  Unleash the potential of your business with our cutting-edge app development solutions. Our experienced team specializes in creating high-performance, scalable, and user-friendly mobile and web applications tailored to meet your specific needs.</p></div>
//             <div className="imgbox_box2">
//             <img src="/Dummy/mobile.png" alt="mobile" className="img_box2"/>
//          </div>
//           </div>    

//         </SwiperSlide>
//         <SwiperSlide>   
//         <div  className='centerslide_box2' >
//             <div className="text_box2" ><h2 className="h2_box2">UI/UX Development</h2><p className="p_box2">Transform your digital products with our professional UI/UX design solutions. Our experienced team creates visually stunning and highly intuitive interfaces that offer an exceptional user experience, ensuring your product stands out in a competitive market.</p></div>
//             <div className="imgbox_box2">
           
//             <img src="/Dummy/uiux.png" alt="uiux" className="img_box2"/>
//         </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>   
//         <div className='centerslide_box2'  >
//             <div className="text_box2" ><h2 className="h2_box2">Machine Learning</h2><p className="p_box2">Unlock the full potential of your data with our Machine Learning as a Service (MLaaS). Our expert team delivers cutting-edge machine learning solutions that drive innovation, enhance decision-making, and boost operational efficiency.</p></div>
//             <div className="imgbox_box2">
//             <img src="/Dummy/machine.png" alt="machine" className="img_box2"/>
//          </div>
//           </div> 
//         </SwiperSlide>
//         <SwiperSlide> 
//         <div className='centerslide_box2'  >
//             <div className="text_box2" ><h2 className="h2_box2">MERN Stack</h2><p className="p_box2">Transform your digital presence with our comprehensive MERN stack development services. Our expert team leverages the power of MongoDB, Express.js, React, and Node.js to deliver high-performance, scalable, and secure web applications tailored to your business needs.</p></div>
//             <div className="imgbox_box2">
//             <img src="/Dummy/mern.png" alt="mern" className="img_box2"/>
//          </div>
//           </div>   
//         </SwiperSlide>
        
//         </div>
        
          
//       </Swiper>


// </div>
// <div className='box3_'>

// <Swiper

//         loop={true}
//         slidesPerView={1}
//         spaceBetween={20}
//         // breakpoints = {{
//         //   300:{
//         //     slidesPerView:1,
//         //     spaceBetween:20, 
//         //   },
//         //   480:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   },
//         //   745:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   },
//         //   1120:{slidesPerView:2,
//         //     spaceBetween:20,
//         //   }
//         // }}
      
      
          
          
        

//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
          
//         //   pauseOnMouseEnter: true,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         modules={[Autoplay,]}
//         className='mySwiper'
//       >

//         <div className='slides_box1'>
       
//         <SwiperSlide>  

//         <div className='slide_box1'>
//           <img src="/Dummy/web.png" alt="web" className="img_box1"/>
//           <h2 className="h2_box1">Web Development</h2>
//           </div>    
//         </SwiperSlide>

       
//         <SwiperSlide> 
//         <div className='slide_box1'>
//           <img src="/Dummy/mobile.png" alt="wemobileb" className="img_box1"/>
//           <h2 className="h2_box1">Mobile Development</h2>
//           </div>      

//         </SwiperSlide>
//         <SwiperSlide>   
//         <div className='slide_box1'>
//           <img src="/Dummy/uiux.png" alt="uiux" className="img_box1"/>
//           <h2 className="h2_box1">UI/UX Development</h2>
//           </div> 
//         </SwiperSlide>
//         <SwiperSlide>   
//         <div className='slide_box1'>
//           <img src="/Dummy/machine.png" alt="machine" className="img_box1"/>
//           <h2 className="h2_box1">Machine Learning</h2>
//           </div> 
//         </SwiperSlide>
//         <SwiperSlide> 
//         <div className='slide_box1'>
//           <img src="/Dummy/mern.png" alt="mern" className="img_box1"/>
//           <h2 className="h2_box1">MERN Stack</h2>
//           </div>  
//         </SwiperSlide>

//         <SwiperSlide>
//         <div className='slide_box1'>
//           <img src="/Dummy/cloud.png" alt="cloud" className="img_box1"/>
//           <h2 className="h2_box1">Cloud</h2>
//           </div>    
//         </SwiperSlide>
        
//         </div>
        
          
//       </Swiper>


// </div>
//     </div>
//   )
// }

// export default Centerslider