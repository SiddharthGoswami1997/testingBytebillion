import React, { useState, useEffect } from "react";
import styles from "./GenEnquiry.module.css";
import { toast } from 'react-toastify';
const GenEnquiry = () => {
  const [details, setDetails] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const [error, setError] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setDetails({ ...details, [ e.target.name]: e.target.value });
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
      details.email.charAt(details.email.length - 5) !== "."
    ) {
      newError.email = " '.' invalid position";
    }

    if (details.company.trim() === "") {
      newError.company = "Please enter your company name";
    } else if (details.company.trim().length < 3) {
      newError.company = "Company name must be at least 3 characters";
    }

    if (details.phone.trim() === "") {
      newError.phone = "please enter phone number";
    } else if (isNaN(details.phone.trim())) {
      newError.phone = "please enter digits only";
    } else if (details.phone.trim().length < 10) {
      newError.phone = "Phone number must be at least 10 digits";
    }

    if (details.enquiry.trim() === "") {
      newError.enquiry = "please enter your enquiry";
    } else if (details.enquiry.trim().length <= 9) {
      newError.enquiry = "please write enquiry of at least 10 characters";
    } else {
      setFlag(true);
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      setFlag(true);
      toast.success(`Congrats ${details.name}, Your Enquiry Have Been Submitted Successfully!`);
      setDetails({ name: "", company: "", email: "", phone: "", enquiry: "" });
    } else {
      setFlag(false);
    }
  };
  return (
    <section className={styles.container_general}>
      <div className={styles.headingdiv_general}>
        <p className={styles.heading_general}>We’re Here To Help</p>
        <p className={styles.headingP_general}>
          Reach out to us for all your enquiries
        </p>
      </div>
      <form className={styles.form_general} onSubmit={handleSubmit}>
        <div className={styles.formbox1_general}>
          <div className={styles.formcol1_general}>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className={styles.forminput_general}
                value={details.name}
                onChange={handleChange}
              />
              <span className={styles.gen_errmsg}>{error.name}</span>
            </div>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Company Name*</label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company Name"
                className={styles.forminput_general}
                value={details.company}
                onChange={handleChange}
              />
              <span className={styles.gen_errmsg}>{error.company}</span>
            </div>
          </div>
          <div className={styles.formcol1_general}>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Email*</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                className={styles.forminput_general}
                value={details.email}
                onChange={handleChange}
              />
              <span className={styles.gen_errmsg}>{error.email}</span>
            </div>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Phone Number*</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                className={styles.forminput_general}
                value={details.phone}
                onChange={handleChange}
              />
             <span className={styles.gen_errmsg}>{error.phone}</span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.textelem_general}>
            <label htmlFor="enquiryType" className={styles.formlabel_general}>
              When Can We help you with
            </label>
            <select id="enquiryType" name="enquiryType" className={styles.enquiryoption}>
              <option value="Select type of enquiry" style={{ padding: "20px" }}>
                Select type of enquiry
              </option>
              <option value="Business Enquiry">Business Enquiry</option>
              <option value="Other">Other</option>
              
            </select>
          </div>
        </div>
        <div>
          <div className={styles.textelem_general}>
            <label className={styles.formlabel_general}>Enquiry*</label>
            <input
              type="text"
              name="enquiry"
              placeholder="Help us know a little about your query"
              className={styles.textinput_general}
              value={details.enquiry}
              onChange={handleChange}
            />
           <span className={styles.gen_errmsg}>{error.enquiry}</span>
          </div>
        </div>
        <button type="submit" className={styles.btn_general}>
          Send Enquiry
        </button>
      </form>
    </section>
  );
};
export default GenEnquiry;