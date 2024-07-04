import React from "react";
import styles from "./GenEnquiry.module.css";
const GenEnquiry = () => {
  return (
    <section className={styles.container_general}>
      <div className={styles.headingdiv_general}>
        <p className={styles.heading_general}>We’re Here To Help</p>
        <p className={styles.headingP_general}>
          Reach out to us for all your enquiries
        </p>
      </div>
      <form className={styles.form_general}>
        <div className={styles.formbox1_general}>
          <div className={styles.formcol1_general}>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Name</label>{" "}
              <input
                type="text"
                placeholder="EnterName"
                className={styles.forminput_general}
              />
            </div>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Company Name</label>{" "}
              <input
                type="text"
                placeholder="Enter Company Name"
                className={styles.forminput_general}
              />
            </div>
          </div>
          <div className={styles.formcol1_general}>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Email</label>{" "}
              <input
                type="text"
                placeholder="EnterEmail"
                className={styles.forminput_general}
              />
            </div>
            <div className={styles.formelem_general}>
              <label className={styles.formlabel_general}>Phone Number</label>{" "}
              <input
                type="text"
                placeholder="Enter phone number"
                className={styles.forminput_general}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.textelem_general}>
            <label for="cars" className={styles.formlabel_general}>
              When Can We help you with
            </label>
            <select id="cars" name="cars" className={styles.enquiryoption}>
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
            <label className={styles.formlabel_general}>Enquiry</label>{" "}
            <input
              type="text"
              placeholder="Help us know a little about your query"
              className={styles.textinput_general}
            />
          </div>
        </div>
      </form>
      <button className={styles.btn_general}>Send Enquiry</button>
    </section>
  );
};

export default GenEnquiry;
