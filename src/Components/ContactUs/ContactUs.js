import React from "react";
import styles from "./ContactUs.module.css";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({});

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let timer;
    if (flag) {
      timer = setTimeout(() => {
        setFlag(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [flag]);

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);

    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (details.name.trim() === "") {
      newError.name = "please enter name";
    } else if (
      details.name.trim().length <= 2 ||
      details.name.trim().length > 20
    ) {
      newError.name = "name must be between 2 and 20";
    }

    if (details.email.trim() === "") {
      newError.email = "please enter email";
    } else if (details.email.trim().indexOf("@") <= 0) {
      newError.email = "'@' invalid position";
    } else if (
      details.email.charAt(details.email.length - 4) !== "." &&
      details.email.charAt(details.email.length - 3) !== "." &&
      details.email.charAt(details.email.length - 5) !=="."
    ) {
      newError.email = " '.' invalid position";
    }

    if (details.phone.trim() === "") {
      newError.phone = "please enter phone number";
    } else if (isNaN(details.phone.trim())) {
      newError.phone = "please enter digit only";
    } else if (details.phone.trim().length < 10) {
      newError.phone = "Phone number must be at least 10 digits";
    }

    if (details.message.trim() === "") {
      newError.message = "please enter your message";
    } else if (details.message.trim().length <= 9) {
      newError.message = "please write message atleast minimum 10 characters";
    } else {
      setFlag(true);
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      setFlag(true);
      toast.success(`Congrats ${details.name}, you have submitted successfully!`);

      setDetails({ name: "", email: "", phone: "", message: "" });
    } else {
      setFlag(false);
    }
  };

  return (
    <section className={styles.container_contact}>
      <main className={styles.content1_contact}>
        <div className={styles.heading1_contact}>
          <p className={styles.para_contact}>Reach Out To Us</p>
          <div className={styles.contact_contact}>
            <div className={styles.logo_contact}>
              {" "}
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <p className={styles.address_contact}>
              401, Sai Ram Plaza, near mata gujari Ibus stop, Mangal Nagar,
              Indore, Madhya Pradesh 452001
            </p>
          </div>
          <div className={styles.contact_contact}>
            <div className={styles.logo_contact}>
              {" "}
              <i class="fa-solid fa-envelope"></i>
            </div>
            <p className={styles.address_contact}>iamganeshpatidar@gmail.com</p>
          </div>
          <div className={styles.contact_contact}>
            <div className={styles.logo_contact}>
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <p className={styles.address_contact}>7987265628</p>
          </div>
        </div>
        <div>
          <img
            src="/Images/Contactus_lady.png"
            alt="lady"
            className={styles.lady_contact}
          />
        </div>
      </main>
      <main className={styles.content2_contact}>
        <div className={styles.heading2_contact}>
          <h2>Have A Question?</h2>
          <div className={styles.handwave_contact}>
            <h2>let’s Get In Touch With Us</h2>
            <img
              src="/Images/Contactus_hand.png"
              alt="wavyhand"
              className={styles.handimg_contact}
            />
          </div>
          <p className={styles.p_contact}>
            Fill up the form our team will contact you soon.
          </p>
        </div>
        <form className={styles.form_contact} >
          <div className={styles.inputbox_contact}>
            <label className={styles.label_contact}>Name*</label>
            <input
              type="text"
              placeholder="Enter name"
              id="name"
              name="name"
              className={styles.inputform_contact}
              value={details.name}
              onChange={handleChange}
            />

            <span className={styles.er_contact}>{error.name}</span>
          </div>
          <div className={styles.inputbox_contact}>
            <label className={styles.label_contact}>Email*</label>
            <input
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              className={styles.inputform_contact}
              value={details.email}
              onChange={handleChange}
            />

            <span className={styles.er_contact}>{error.email}</span>
          </div>
          <div className={styles.inputbox_contact}>
            <label className={styles.label_contact}>Phone Number*</label>
            <input
              type="text"
              placeholder="Enter phone number"
              id="phone"
              name="phone"

              className={styles.inputform_contact}
              value={details.phone}
              onChange={handleChange}
            />

            <span className={styles.er_contact}>{error.phone}</span>
          </div>
          <div className={styles.inputbox_contact}>
            <label className={styles.label_contact}>Message*</label>
            <textarea
              type="text"
              placeholder={`Write your message here`}
              id="desc"
              name="message"
              className={styles.inputdesc_contact}
              value={details.message}
              onChange={handleChange}
            />

            <span className={styles.er_contact}>{error.message}</span>
          </div>
        </form>
        <button
          onClick={handleSubmit}
          type="submit"
          id="desc"
          name="desc"
          className={styles.btn_contact}
        >
          Send
        </button>
      </main>
    </section>
  );
};

export default ContactUs;
