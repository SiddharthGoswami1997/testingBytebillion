import React, { useState } from "react";
import styles from "./JobEnquiry.module.css";


const JobEnquiry = () => {


  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map(file => file.name);
    setFileNames(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files).map(file => file.name);
    setFileNames(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };



  return (
    <section className={styles.container_job}>
      <div className={styles.headingdiv_job}>
        <p className={styles.heading_job}>Work With Us At Bytebillion </p>
        <p className={styles.headingP_job}>Start your work with bytebillion</p>
      </div>
      <form className={styles.form_job}>
        <div className={styles.formbox1_job}>
          <div className={styles.formcol1_job}>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Name</label>{" "}
              <input
                type="text"
                placeholder="Enter Name"
                className={styles.forminput_job}
              />
            </div>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Position</label>{" "}
              <input
                type="text"
                placeholder="Enter Position"
                className={styles.forminput_job}
              />
            </div>
          </div>
          <div className={styles.formcol1_job}>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Email</label>{" "}
              <input
                type="text"
                placeholder="Enter Email"
                className={styles.forminput_job}
              />
            </div>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Phone Number</label>{" "}
              <input
                type="text"
                placeholder="Enter Phone Number"
                className={styles.forminput_job}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.textelem_job}>
            <label className={styles.formlabel_job}>Cover Letter</label>{" "}
            <textarea
              type="text"
              placeholder="Just write a couple of sentences about why you love us and you will be doing better than 90% of applications."
              className={styles.textinput_job}
            ></textarea>
          </div>
        </div>

        <div className={styles.formelem_job}>
          <label className={styles.formlabel_project}>
            Project Requirement Document
          </label>
          <div
            className={styles.fileupload_project}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
          >
            <div className={styles.drag_project}>
              <img className={styles.img_project} src="/Images/slideshow_file.png" alt="file" />
              <label className={styles.dragtext_project}>
                Drag and drop your files here
              </label>
              <p>or</p>
            </div>
            <div className={styles.browse_project}>
              <label className={styles.browsetext_project} htmlFor="browse">
                Browse File
              </label>
              <input
                id="browse"
                type="file"
                accept=".png,.pdf,.jpg"
                multiple
                className={styles.browseinput_project}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className={styles.filenames_project}>
            {fileNames.map((name, index) => (
              <p key={index} className={styles.filename_project}>{name}</p>
            ))}
          </div>
        </div>


        {/* <div className={styles.formelem_job}>
          <label className={styles.formlabel_project}>
            Project Requirement Document
          </label>
          <div className={styles.fileupload_project}>
            <div className={styles.drag_project}>
              <img
                className={styles.img_project}
                src="/Images/slideshow_file.png"
                alt="file"
              />
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
        </div> */}
      </form>
      <button className={styles.btn_job}>Submit Application</button>
    </section>
  );
};

export default JobEnquiry;
