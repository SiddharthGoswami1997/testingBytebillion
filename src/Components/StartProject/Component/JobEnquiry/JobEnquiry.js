// import React, { useState } from "react";
// import styles from "./JobEnquiry.module.css";


// const JobEnquiry = () => {


//   const [fileNames, setFileNames] = useState([]);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files).map(file => file.name);
//     setFileNames(files);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const files = Array.from(e.dataTransfer.files).map(file => file.name);
//     setFileNames(files);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };



//   return (
//     <section className={styles.container_job}>
//       <div className={styles.headingdiv_job}>
//         <p className={styles.heading_job}>Work With Us At Bytebillion </p>
//         <p className={styles.headingP_job}>Start your work with bytebillion</p>
//       </div>
//       <form className={styles.form_job}>
//         <div className={styles.formbox1_job}>
//           <div className={styles.formcol1_job}>
//             <div className={styles.formelem_job}>
//               <label className={styles.formlabel_job}>Name</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 className={styles.forminput_job}
//               />
//             </div>
//             <div className={styles.formelem_job}>
//               <label className={styles.formlabel_job}>Position</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Position"
//                 className={styles.forminput_job}
//               />
//             </div>
//           </div>
//           <div className={styles.formcol1_job}>
//             <div className={styles.formelem_job}>
//               <label className={styles.formlabel_job}>Email</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Email"
//                 className={styles.forminput_job}
//               />
//             </div>
//             <div className={styles.formelem_job}>
//               <label className={styles.formlabel_job}>Phone Number</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Phone Number"
//                 className={styles.forminput_job}
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className={styles.textelem_job}>
//             <label className={styles.formlabel_job}>Cover Letter</label>{" "}
//             <textarea
//               type="text"
//               placeholder="Just write a couple of sentences about why you love us and you will be doing better than 90% of applications."
//               className={styles.textinput_job}
//             ></textarea>
//           </div>
//         </div>

//         <div className={styles.formelem_job}>
//           <label className={styles.formlabel_project}>
//             Project Requirement Document
//           </label>
//           <div
//             className={styles.fileupload_project}
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//             onDragEnter={handleDragEnter}
//           >
//             <div className={styles.drag_project}>
//               <img className={styles.img_project} src="/Images/slideshow_file.png" alt="file" />
//               <label className={styles.dragtext_project}>
//                 Drag and drop your files here
//               </label>
//               <p>or</p>
//             </div>
//             <div className={styles.browse_project}>
//               <label className={styles.browsetext_project} htmlFor="browse">
//                 Browse File
//               </label>
//               <input
//                 id="browse"
//                 type="file"
//                 accept=".png,.pdf,.jpg"
//                 multiple
//                 className={styles.browseinput_project}
//                 onChange={handleFileChange}
//               />
//             </div>
//           </div>
//           <div className={styles.filenames_project}>
//             {fileNames.map((name, index) => (
//               <p key={index} className={styles.filename_project}>{name}</p>
//             ))}
//           </div>
//         </div>


//         <div className={styles.formelem_job}>
//           <label className={styles.formlabel_project}>
//             Project Requirement Document
//           </label>
//           <div className={styles.fileupload_project}>
//             <div className={styles.drag_project}>
//               <img
//                 className={styles.img_project}
//                 src="/Images/slideshow_file.png"
//                 alt="file"
//               />
//               <label for="browse" className={styles.dragtext_project}>
//                 Drag and drop your files here
//               </label>
//               <p>or</p>
//             </div>
//             <div className={styles.browse_project}>
//               <label for="browse" className={styles.browsetext_project}>
//                 Browse File
//               </label>
//               <input
//                 id="browse"
//                 type="file"
//                 accept=".png,.pdf,.jpg"
//                 multiple
//                 className={styles.browseinput_project}
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//       <button className={styles.btn_job}>Submit Application</button>
//     </section>
//   );
// };

// export default JobEnquiry;






import React, { useState } from "react";
import styles from "./JobEnquiry.module.css";
import { toast } from 'react-toastify';


const JobEnquiry = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "", 
  });

  const [error, setError] = useState({});
  const [fileNames, setFileNames] = useState([]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => file.name);
    setFileNames(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files).map((file) => file.name);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (details.name.trim() === "") {
      newError.name = "Please enter name";
    } else if (details.name.trim().length <= 2 || details.name.trim().length > 20) {
      newError.name = "Name must be between 2 and 20 characters";
    }

    if (details.email.trim() === "") {
      newError.email = "Please enter email";
    } else if (details.email.trim().indexOf("@") <= 0) {
      newError.email = "'@' invalid position";
    } else if (
      details.email.charAt(details.email.length - 4) !== "." &&
      details.email.charAt(details.email.length - 3) !== "." &&
      details.email.charAt(details.email.length - 5) !== "."
    ) {
      newError.email = "'.' invalid position";
    }

    if (details.phone.trim() === "") {
      newError.phone = "Please enter phone number";
    } else if (isNaN(details.phone.trim())) {
      newError.phone = "Please enter digits only";
    } else if (details.phone.trim().length < 10) {
      newError.phone = "Phone number must be at least 10 digits";
    }

    if (details.position.trim() === "") {
      newError.position = "Please enter position";
    } else if (details.position.trim().length <= 2 || details.position.trim().length > 20) {
      newError.position = "Position must be between 2 and 20 characters";
    }

    if (details.coverLetter.trim() === "") {
      newError.coverLetter = "Please write a cover letter";
    } else if (details.coverLetter.trim().length < 10) {
      newError.coverLetter = "Cover letter must be at least 10 characters";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      toast.success(`Congrats ${details.name}, Your Job Application Has Been Submitted Successfully!`);
      setDetails({ name: "", email: "", phone: "", position: "", coverLetter: "" });
      setFileNames([]);
    }
  };

  return (
    <section className={styles.container_job}>
      <div className={styles.headingdiv_job}>
        <p className={styles.heading_job}>Work With Us At Bytebillion </p>
        <p className={styles.headingP_job}>Start your work with bytebillion</p>
      </div>
      <form className={styles.form_job} onSubmit={handleSubmit}>
        <div className={styles.formbox1_job}>
          <div className={styles.formcol1_job}>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className={styles.forminput_job}
                value={details.name}
                onChange={handleChange}
              />
              <span className={styles.job_errmsg}>{error.name}</span>
            </div>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Position</label>
              <input
                type="text"
                name="position"
                placeholder="Enter Position"
                className={styles.forminput_job}
                value={details.position}
                onChange={handleChange}
              />
              <span className={styles.job_errmsg}>{error.position}</span>
            </div>
          </div>
          <div className={styles.formcol1_job}>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                className={styles.forminput_job}
                value={details.email}
                onChange={handleChange}
              />
              <span className={styles.job_errmsg}>{error.email}</span>
            </div>
            <div className={styles.formelem_job}>
              <label className={styles.formlabel_job}>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                className={styles.forminput_job}
                value={details.phone}
                onChange={handleChange}
              />
              <span className={styles.job_errmsg}>{error.phone}</span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.textelem_job}>
            <label className={styles.formlabel_job}>Cover Letter</label>
            <textarea
              type="text"
              placeholder="Just write a couple of sentences about why you love us and you will be doing better than 90% of applications."
              className={styles.textinput_job}
              value={details.coverLetter}
              onChange={handleChange}
              name="coverLetter"
            ></textarea>
            <span className={styles.job_errmsg}>{error.coverLetter}</span>
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
              <img
                className={styles.img_project}
                src="/Images/slideshow_file.png"
                alt="file"
              />
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
              <p key={index} className={styles.filename_project}>
                {name}
              </p>
            ))}
          </div>
        </div>
        <button type="submit" className={styles.btn_job}>
          Submit Application
        </button>
      </form>
    </section>
  );
};

export default JobEnquiry;
