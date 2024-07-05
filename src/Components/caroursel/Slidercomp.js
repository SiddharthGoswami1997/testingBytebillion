import React from "react";
import Slider from "react-slick";
import "./Slidecomp.css"; // Import the CSS file

function Slidercomp() {
  const settings = {
    dots: false,
    centerPadding: "60px",
    className: "center",
    autoplay: true,
    centerMode: true,
    infinite: true,
    autoplaySpeed: 30000000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
   
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <div  className="front-side" >
            <div className="text_slider" ><h2 className="h2_slider">Cloud</h2><p className="p_slider">Transform your business with our Cloud as a Service (CaaS) offerings. Our expert team delivers scalable, secure, and efficient cloud solutions tailored to meet your unique business needs. Leverage the full potential of cloud computing to drive innovation, reduce costs, and enhance performance.</p></div>
            <img src="/Dummy/cloud.png" alt="cloud" className="img_slider"/>
          </div>
          <div className="back-side" >
          <img src="/Dummy/cloud.png" alt="cloud" className="img_slider"/>
          <h2 className="h2_slider">Cloud</h2>
          </div>
        </div>
        <div className="slide">
        <div  className="front-side" >
            <div className="text_slider" ><h2 className="h2_slider">Web Development</h2><p className="p_slider">Build a Powerful Online Presence with Our Expert Website Development Services
            Elevate your business with our top-notch website development solutions. Our skilled team specializes in creating responsive, user-friendly, and visually appealing websites tailored to meet your unique business needs.</p></div>
            <img src="/Dummy/web.png" alt="web" className="img_slider"/>
           </div>
            <div className="back-side" >
          <img src="/Dummy/web.png" alt="web" className="img_slider"/>
          <h2 className="h2_slider">Web Development</h2>
          </div>
          </div>
        <div className="slide">
        <div  className="front-side" >
            <div className="text_slider" ><h2 className="h2_slider">Mobile Development </h2><p className="p_slider"> Transform Your Ideas into Reality with Our Expert App Development Service.  Unleash the potential of your business with our cutting-edge app development solutions. Our experienced team specializes in creating high-performance, scalable, and user-friendly mobile and web applications tailored to meet your specific needs.</p></div>
            <img src="/Dummy/mobile.png" alt="mobile" className="img_slider"/>
          </div>  
          
          <div className="back-side" >
          <img src="/Dummy/mobile.png" alt="wemobileb" className="img_slider"/>
          <h2 className="h2_slider">Mobile Development</h2>
          </div>        </div>

        <div className="slide">
        <div  className="front-side" >
            <div className="text_slider" ><h2 className="h2_slider">UI/UX Development</h2><p className="p_slider">Transform your digital products with our professional UI/UX design solutions. Our experienced team creates visually stunning and highly intuitive interfaces that offer an exceptional user experience, ensuring your product stands out in a competitive market.</p></div>
            <img src="/Dummy/uiux.png" alt="uiux" className="img_slider"/>
          </div>
          <div className="back-side" >
          <img src="/Dummy/uiux.png" alt="uiux" className="img_slider"/>
          <h2 className="h2_slider">UI/UX Development</h2>
          </div>      
            </div>
        <div className="slide">
        <div  className="front-side" >
            <div className="text_slider" ><h2 className="h2_slider">Machine Learning</h2><p className="p_slider">Unlock the full potential of your data with our Machine Learning as a Service (MLaaS). Our expert team delivers cutting-edge machine learning solutions that drive innovation, enhance decision-making, and boost operational efficiency.</p></div>
            <img src="/Dummy/machine.png" alt="machine" className="img_slider"/>
          </div> 
          <div className="back-side" >
          <img src="/Dummy/machine.png" alt="machine" className="img_slider"/>
          <h2 className="h2_slider">Machine Learning</h2>
          </div>    
                </div>
        <div className="slide">
        <div  className="front-side" >
            <div className="text_slider" ><h2 className="h2_slider">MERN Stack</h2><p className="p_slider">Transform your digital presence with our comprehensive MERN stack development services. Our expert team leverages the power of MongoDB, Express.js, React, and Node.js to deliver high-performance, scalable, and secure web applications tailored to your business needs.</p></div>
            <img src="/Dummy/mern.png" alt="mern" className="img_slider"/>
          </div>  
          <div className="back-side" >
          <img src="/Dummy/mern.png" alt="mern" className="img_slider"/>
          <h2 className="h2_slider">MERN Stack</h2>
          </div>       
           </div>
      </Slider>
    </div>
  );
}

export default Slidercomp;
