// import React from 'react'
// import styles from './SwiperCarousel.module.css'
// const Swipercarousel = () => {
//   return (
//     <div className={styles.box_card}  >
//       <div >  <img src='/Images/Card_mobile.png' alt='mobile' className={styles.img_card}/>
//         <p className={styles.title_card}>Mobile development</p>
//         </div>
//         <p className={styles.content_card}>Are you obsessed with crafting experiences that fit perfectly in the palm of your hand?  Then ditch the desktop and join our mobile development team!  We're building the apps that are transforming the way people live, work, and play.</p>
//     </div>
//   )
// }

// export default Swipercarousel



// import React from "react";
// import Slider from "react-slick";
// import "./Swipercarousel.css"; // Import the CSS file

// function Swipercarousel() {
//   const settings = {
//     dots: false,
//     centerPadding: "60px",
//     className: "center",
//     autoplay: true,
//     centerMode: true,
//     infinite: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // adaptiveHeight: true,
   
//   };

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

// export default Swipercarousel;
// import React from "react";
// import Slider from "react-slick";
// import "./Slidecomp.css"; // Import the CSS file

// function Slidercomp() {
//   const settings = {
//     dots: false,
//     centerPadding: "60px",
//     className: "center",
//     autoplay: true,
//     centerMode: true,
//     infinite: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {/* Your slide components here */}
//       </Slider>
//     </div>
//   );
// }

// export default Slidercomp;




// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }












import React from "react";
import Slider from "react-slick";
import Card from "../Components/Career/Components2/CareerArea/Card/Card"
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerPadding:20,
    slidesToScroll: 1,
  };


  const data = [
    {
      logo:'/Images/Card_cloud.png',
      alter:"cloud",
      title:'Cloud',
      desc:`The cloud is revolutionizing the IT industry, and we're at the forefront of innovation.  If you're passionate about technology and want to be part of a team that's shaping the future, then a cloud career with us is the perfect launchpad.`
    },
    {
      logo:'/Images/Card_mern.png',
      alter:"mern",  
      title:'MERN Stack',
      desc:`Are you a talented developer passionate about building dynamic and scalable web applications?  If you thrive on the power of JavaScript and love crafting user-friendly experiences, then a MERN career with us is the perfect opportunity to unleash your potential.`
    },
    {
      logo:'/Images/Card_ml.png',
      alter:"ml",
      title:'Machine Learning',
      desc:`Are you fascinated by the potential of artificial intelligence to transform our world?  If so, then a career in Machine Learning (ML) with us is your chance for, turning data into gold.`
    },
    {
      logo:'/Images/Card_web.png',
      alter:"web",
      title:'Web development',
      desc:`Are you a creative problem-solver with a knack for building intuitive and engaging web experiences? Do you thrive on turning ideas into reality through the power of code? Then a web development career with us is your chance to make a real impact.`
    },
    {
      logo:'/Images/Card_mobile.png',
      alter:"mobile",
      title:'Mobile development',
      desc:`Are you obsessed with crafting experiences that fit perfectly in the palm of your hand?  Then ditch the desktop and join our mobile development team!  We're building the apps that are transforming the way people live, work, and play.`
    },
    {
      logo:'/Images/Card_ui.png',
      alter:"ui",
      title:'UI/UX development',
      desc:`Do you have a keen eye for detail and a desire to translate complex ideas into user-friendly interfaces?  If so, then a UI/UX development career with us is the perfect opportunity to turn your passion into a reality.`
    },
    
  ]
  



  return (
    <div className="slider-container"  style={{display:'flex',justifyContent:'space-between'}}>
      <Slider {...settings}>
        <div>
        <Card colour={'#F58634'}  logo={data[0].logo} alter={data[0].alter} title={data[0].title} desc={data[0].desc}/>
        </div>
        <div>
        <Card colour={'#7D4FCE'} logo={data[1].logo} alter={data[1].alter} title={data[1].title} desc={data[1].desc}/>
        </div>
        <div>
        <Card colour={'#1978B2'} logo={data[2].logo} alter={data[2].alter} title={data[2].title} desc={data[2].desc}/>
        </div>
        <div>
        <Card colour={'#FA4E54'} logo={data[3].logo} alter={data[3].alter} title={data[3].title} desc={data[3].desc}/>
        </div>
        <div>
        <Card colour={'#EFA00B'} logo={data[4].logo} alter={data[4].alter} title={data[4].title} desc={data[4].desc}/>
        </div>
        <div>
        <Card colour={'#57007B'} logo={data[5].logo} alter={data[5].alter} title={data[5].title} desc={data[5].desc}/>
        </div>
       
      </Slider>
    </div>
  );
}

export default MultipleItems;
