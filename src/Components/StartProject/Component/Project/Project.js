import React from "react";
import styles from "./Project.module.css";
const Project = () => {
  return (
    <section className={styles.container_project}>
      <div className={styles.headingdiv_project}>
        <p className={styles.heading_project}>let’s Work Together</p>
        <p className={styles.headingP_project}>
          Start your project with bytebillion
        </p>
      </div>
      <form className={styles.form_project}>
        <div className={styles.formbox1_project}>
          <div className={styles.formcol1_project}>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Name</label>{" "}
              <input
                type="text"
                placeholder="EnterName"
                className={styles.forminput_project}
              />
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Company Name</label>{" "}
              <input
                type="text"
                placeholder="Enter Company Name"
                className={styles.forminput_project}
              />
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>
                When Do You Want To Start
              </label>{" "}
              <input
                type="text"
                placeholder="Select a Date"
                className={styles.forminput_project}
              />
            </div>
          </div>
          <div className={styles.formcol1_project}>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Email</label>{" "}
              <input
                type="text"
                placeholder="EnterEmail"
                className={styles.forminput_project}
              />
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Phone Number</label>{" "}
              <input
                type="text"
                placeholder="Enter phone number"
                className={styles.forminput_project}
              />
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Budget</label>{" "}
              <input
                type="text"
                placeholder="Select budget range"
                className={styles.forminput_project}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.textelem_project}>
            <label className={styles.formlabel_project}>
              Tell Us About Your Project Requirement
            </label>{" "}
            <textarea
              type="text"
              placeholder="Breif about your project"
              className={styles.textinput_project}
            ></textarea>
          </div>
        </div>
        <div className={styles.formelem_project}>
          <label className={styles.formlabel_project}>
            Project Requirement Document
          </label>
          <div className={styles.fileupload_project}>
            <div className={styles.drag_project}>
              <img className={styles.img_project} src="/Images/slideshow_file.png" alt="file" />
              <label for="browse" className={styles.dragtext_project}>
                Drag and drop your files here
              </label>
              <p>or</p>
            </div>
            <div className={styles.browse_project}>
              <label for="browse" className={styles.browsetext_project}>
                Browse File
              </label>
              <input
                id="browse"
                type="file"
                accept=".png,.pdf,.jpg"
                multiple
                className={styles.browseinput_project}
              />
            </div>
          </div>
        </div>
      </form>
      <button className={styles.btn_project}>Start project</button>
    </section>
  );
};

export default Project;
