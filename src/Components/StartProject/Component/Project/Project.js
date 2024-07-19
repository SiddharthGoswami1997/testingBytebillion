// import React from "react";
// import styles from "./Project.module.css";
// const Project = () => {
//   return (
//     <section className={styles.container_project}>
//       <div className={styles.headingdiv_project}>
//         <p className={styles.heading_project}>let’s Work Together</p>
//         <p className={styles.headingP_project}>
//           Start your project with bytebillion
//         </p>
//       </div>
//       <form className={styles.form_project}>
//         <div className={styles.formbox1_project}>
//           <div className={styles.formcol1_project}>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Name</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Company Name</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Company Name"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>
//                 When Do You Want To Start
//               </label>{" "}
//               <input
//                 type="date"
//                 placeholder="Select a Date"
//                 className={styles.forminput_project}
//               />
//             </div>
//           </div>
//           <div className={styles.formcol1_project}>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Email</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Email"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Phone Number</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Phone Number"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Budget</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Select budget range"
//                 className={styles.forminput_project}
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className={styles.textelem_project}>
//             <label className={styles.formlabel_project}>
//               Tell Us About Your Project Requirement
//             </label>{" "}
//             <textarea
//               type="text"
//               placeholder="Breif about your project"
//               className={styles.textinput_project}
//             ></textarea>
//           </div>
//         </div>
//         <div className={styles.formelem_project}>
//           <label className={styles.formlabel_project}>
//             Project Requirement Document
//           </label>
//           <div className={styles.fileupload_project}>
//             <div className={styles.drag_project}>
//               <img className={styles.img_project} src="/Images/slideshow_file.png" alt="file" />
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
//       <button className={styles.btn_project}>Start project</button>
//     </section>
//   );
// };

// export default Project;




// import React, { useState } from "react";
// import styles from "./Project.module.css";

// const Project = () => {
//   const [fileNames, setFileNames] = useState([]);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files).map(file => file.name);
//     setFileNames(files);
//   };

//   return (
//     <section className={styles.container_project}>
//       <div className={styles.headingdiv_project}>
//         <p className={styles.heading_project}>let’s Work Together</p>
//         <p className={styles.headingP_project}>
//           Start your project with bytebillion
//         </p>
//       </div>
//       <form className={styles.form_project}>
//         <div className={styles.formbox1_project}>
//           <div className={styles.formcol1_project}>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Name</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Company Name</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Company Name"
//                 className={styles.forminput_project}
//               />
//             </div>
// <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>
//                 When Do You Want To Start
//               </label>{" "}
//               <input
//                 type="text"
//                 placeholder="Select a Date"
//                 className={styles.forminput_project}
//               />
//             </div>
//           </div>
//           <div className={styles.formcol1_project}>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Email</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Email"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Phone Number</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter phone number"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Budget</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Select budget range"
//                 className={styles.forminput_project}
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className={styles.textelem_project}>
//             <label className={styles.formlabel_project}>
//               Tell Us About Your Project Requirement
//             </label>{" "}
//             <textarea
//               type="text"
//               placeholder="Brief about your project"
//               className={styles.textinput_project}
//             ></textarea>
//           </div>
//         </div>
//         <div className={styles.formelem_project}>
//           <label className={styles.formlabel_project}>
//             Project Requirement Document
//           </label>
//           <div className={styles.fileupload_project}>
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
//       </form>
//       <button className={styles.btn_project}>Start project</button>
//     </section>
//   );
// };

// export default Project;









// import React, { useState } from "react";
// import styles from "./Project.module.css";

// const Project = () => {

//   const [selectedDate, setSelectedDate] = useState(''); // State variable for selected date

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

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
//     <section className={styles.container_project}>
//       <div className={styles.headingdiv_project}>
//         <p className={styles.heading_project}>Let’s Work Together</p>
//         <p className={styles.headingP_project}>
//           Start your project with bytebillion
//         </p>
//       </div>
//       <form className={styles.form_project}>
//         <div className={styles.formbox1_project}>
//           <div className={styles.formcol1_project}>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Name</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Company Name</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Company Name"
//                 className={styles.forminput_project}
//               />
//             </div>

//             <div className={styles.formelem_project}>
//   <label className={styles.formlabel_project}>
//     When Do You Want To Start
//   </label>
//   <input
//     type="date"
//     value={selectedDate || 'Select a Date'}
//     onChange={handleDateChange}
//     className={styles.forminput_project}
//   />
//    <label className= {selectedDate ? `${styles.placeholder_label} ${styles.selected_date}` : `${styles.placeholder_label} ${styles.unselected_date}`}>
//     {selectedDate ? selectedDate : 'Select a Date'}
//   </label>
// </div>

//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>
//                 When Do You Want To Start
//               </label>{" "}
//               <input
//                 type="text"
//                 placeholder="Select a Date"
//                 className={styles.forminput_project}
//               />
//             </div>
// </div>
//           <div className={styles.formcol1_project}>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Email</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter Email"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Phone Number</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Enter phone number"
//                 className={styles.forminput_project}
//               />
//             </div>
//             <div className={styles.formelem_project}>
//               <label className={styles.formlabel_project}>Budget</label>{" "}
//               <input
//                 type="text"
//                 placeholder="Select budget range"
//                 className={styles.forminput_project}
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className={styles.textelem_project}>
//             <label className={styles.formlabel_project}>
//               Tell Us About Your Project Requirement
//             </label>{" "}
//             <textarea
//               type="text"
//               placeholder="Brief about your project"
//               className={styles.textinput_project}
//             ></textarea>
//           </div>
//         </div>
//         <div className={styles.formelem_project}>
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
//       </form>
//       <button className={styles.btn_project}>Start project</button>
//     </section>
//   );
// };

// export default Project;













import React, { useState } from "react";
import styles from "./Project.module.css";
import { toast } from 'react-toastify';


const Project = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [error, setError] = useState({});
  const [flag, setFlag] = useState(false);
  const [selectedDate, setSelectedDate] = useState(""); // State variable for selected date
  const [fileNames, setFileNames] = useState([]);
  const [budget, setBudget] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (details.name.trim() === "") {
      newError.name = "Please enter name";
    } else if (
      details.name.trim().length <= 2 ||
      details.name.trim().length > 20
    ) {
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

    if (details.company.trim() === "") {
      newError.company = "Please enter company name";
    } else if (
      details.company.trim().length <= 2 ||
      details.company.trim().length > 20
    ) {
      newError.company = "Company name must be between 2 and 20 characters";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      setFlag(true);
      toast.success(`Congrats ${details.name}, Your Project Details Have Been Submitted Successfully!`);
      setDetails({ name: "", email: "", phone: "", company: "" });
      setSelectedDate("");
      setFileNames([]);
      setBudget("");
      setProjectDescription("");
    } else {
      setFlag(false);
    }
  };

  return (
    <section className={styles.container_project}>
      <div className={styles.headingdiv_project}>
        <p className={styles.heading_project}>Let’s Work Together</p>
        <p className={styles.headingP_project}>
          Start your project with bytebillion
        </p>
      </div>
      <form className={styles.form_project} onSubmit={handleSubmit}>
        <div className={styles.formbox1_project}>
          <div className={styles.formcol1_project}>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className={styles.forminput_project}
                value={details.name}
                onChange={handleChange}
              />
              <span className={styles.project_errmsg}>{error.name}</span>
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company Name"
                className={styles.forminput_project}
                value={details.company}
                onChange={handleChange}
              />
              <span className={styles.project_errmsg}>{error.company}</span>
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>
                When Do You Want To Start
              </label>
              <input
                type="date"
                value={selectedDate || "Select a Date"}
                onChange={handleDateChange}
                className={styles.forminput_project}
              />
              <label
                className={
                  selectedDate
                    ? `${styles.placeholder_label} ${styles.selected_date}`
                    : `${styles.placeholder_label} ${styles.unselected_date}`
                }
              >
                {selectedDate ? selectedDate : "Select a Date"}
              </label>
            </div>
          </div>
          <div className={styles.formcol1_project}>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                className={styles.forminput_project}
                value={details.email}
                onChange={handleChange}
              />
              <span className={styles.project_errmsg}>{error.email}</span>
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                className={styles.forminput_project}
                value={details.phone}
                onChange={handleChange}
              />
              <span className={styles.project_errmsg}>{error.phone}</span>
            </div>
            <div className={styles.formelem_project}>
              <label className={styles.formlabel_project}>Budget</label>
              <input
                type="text"
                placeholder="Select budget range"
                className={styles.forminput_project}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.textelem_project}>
            <label className={styles.formlabel_project}>
              Tell Us About Your Project Requirement
            </label>
            <textarea
              type="text"
              placeholder="Brief about your project"
              className={styles.textinput_project}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={styles.formelem_project}>
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
              <label
                className={styles.browsetext_project}
                htmlFor="browse"
              >
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
        <button type="submit" className={styles.btn_project}>
          Start project
        </button>
      </form>
    </section>
  );
};

export default Project;
