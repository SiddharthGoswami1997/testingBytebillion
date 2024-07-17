import { useEffect } from 'react';
import styles from './Choose.module.css';
import AOS from 'aos'
import "aos/dist/aos.css"

const details = [
  {
    icon: '/Images/Choose/Innovative.png',
    title: 'Innovative Solutions',
    description: 'ByteBillion is dedicated to pushing the boundaries of technology and delivering innovative solutions.',
    animationClass: 'borderAnimation1'
  },
  {
    icon: '/Images/Choose/Expertise.png',
    title: 'Expertise',
    description: 'Experts specializing in a range of cutting-edge technologies. These expertise ensures that they can provide top-notch services tailored to meet your specific needs.',
    animationClass: 'borderAnimation2'
  },
  {
    icon: '/Images/Choose/Passionate.png',
    title: 'Passionate Team',
    description: 'ByteBillion is a team of passionate innovators committed to transforming ideas into reality.',
    animationClass: 'borderAnimation3'
  },
  {
    icon: '/Images/Choose/Services.png',
    title: 'Services',
    description: 'ByteBillion offers a comprehensive suite of services, including software development, cloud solutions, machine learning, and UI/UX design.',
    animationClass: 'borderAnimation4'
  },
  {
    icon: '/Images/Choose/Excellence.png',
    title: 'Excellence',
    description: 'ByteBillion\'s journey began with a commitment to redefining the IT landscape and empowering businesses with transformative technology solutions.',
    animationClass: 'borderAnimation5'
  },
  {
    icon: '/Images/Choose/Products.png',
    title: 'Products',
    description: 'ByteBillion\'s products are designed to streamline processes, enhance efficiency, and drive growth.',
    animationClass: 'borderAnimation6'
  }
];

const Choose = () => {

  useEffect(()=> {
    AOS.init({duration: "3000"})
  },[])

  return (
    <div className={styles.choose__container}>
      <h1 className={styles.choose__heading} data-aos="zoom-in">Why Choose Us</h1>
      <div className={styles.choose__mainBox}>
        {details.map((detail, index) => (
          <div key={index} className={`${styles.choose__box} ${styles[detail.animationClass]}`}>
            <div className={styles.choose__icon}>
              <img className={styles.choose_iconimg} src={detail.icon} alt={`${detail.title} icon`} />
            </div>
            <div className={styles.choose__content}>
              <h3 className={styles.choose__title}>{detail.title}</h3>
              <p className={styles.choose__description}>{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;