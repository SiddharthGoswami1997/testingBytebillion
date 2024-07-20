import { useState, useEffect } from "react";
import styles from "./Ourservices.module.css";
const data = [
  { name: "Web Development", image: '/Images/Ourservices/web_development.png', alt: 'Web Development', content: "Web development involves creating, building, and maintaining websites and web applications. Developers use frameworks and tools like React, Angular, Vue.js, Node.js, and Django to streamline the development process and create dynamic, interactive web experiences." },
  { name: "MERN Stack",image: '/Images/Ourservices/mern_stacknew.png', alt: 'Mern Stack', content: "The MERN stack is a popular software stack used for building dynamic web applications. It's an acronym that stands for MongoDB, Express.js, React.js, and Node.js. Each component of the stack plays a specific role in the development process." },
  { name: "UI/UX Development", image: "/Images/Ourservices/uiux_devlopment.png", alt: "UiUx_Devlopment", content: "UI/UX development focuses on creating intuitive, aesthetically pleasing user interfaces and experiences for digital products. It involves understanding user behaviors, wireframing, prototyping, and testing to ensure seamless interactions." },
  { name: "Mobile Development", image: "/Images/Ourservices/mobile_development.png", alt: "Mobile_Development", content: "Mobile app development involves creating software applications that run on mobile devices like smartphones and tablets.  Developers uses different programming languages to build apps for platforms such as iOS or Android." },
  { name: "Cloud", image: "/Images/Ourservices/cloud.png", alt: "Cloud", content: "Cloud computing refers to the delivery of computing services – including servers, storage, databases, networking, software, and more – over the internet ('the cloud'). Users can access these resources on-demand, paying only for what they use, without the need for upfront infrastructure investment." },
  { name: "Machine Learning", image: "/Images/Ourservices/machine_learning.png", alt: "Machine_Learning" ,content: "Machine learning is a subset of artificial intelligence (AI) that enables systems to automatically learn and improve from experience without being explicitly programmed. It involves algorithms that parse data, learn from it, and make predictions or decisions." },
];

const Ourservices = () => {

  const[activeindex, setActiveindex] = useState(null);
  const[activeimage, setActiveimage] = useState(data[0].image);

  const handleClick = (index, image) => {
    console.log(index);
    setActiveindex(index === activeindex ? null : index);
    
    setActiveimage(image);
  };
  const [bluecircle,setBlueCircle] = useState(true);
return (
    <div className={styles.ourservices__main_box}>
      <h2 className={styles.ourservices__heading}>Our Services </h2>
      <p className={styles.ourservices__descripation}>
        At Bytebillion, We Offer A Comprehensive Suite Of IT Services Designed
        To Empower Your Organization And Achieve Your Strategic Goals.
      </p>

      <div className={styles.ourservices__box}>
        <div className={styles.ourservices__left_box}>
          <div className={activeindex === 0 || bluecircle ? styles.ourservices__circle1 : styles.ourservices__circle2}  >
            <img src={activeimage} alt="Active" className={styles.ourservices__image} />
          </div>
        </div>

        <div className={styles.ourservices__right_box}>
          {data.map((item, index) => (
            <div key={index} className={styles.ourservices__serviceItem} >
              <div className={styles.ourservices__innerserviceitem} onClick={() => handleClick(index, item.image) && activeindex === 0 ? setBlueCircle(true) : setBlueCircle(false)}>
              <h4  className={styles.ourservices__name}>{item.name}</h4>
               <span className={`${styles.plus_icon} ${activeindex === index ? styles.active : ''}`} ></span>
              </div>
              {activeindex === index && <p className={styles.ourservices__details_content}>{item.content}</p>}
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
