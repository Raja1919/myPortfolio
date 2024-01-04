import React from "react";
import "./Project.css";
import dashboard from "../Assets/dashboard.png";
import urlShort from "../Assets/urlShort.jpeg";
import noteApp from "../Assets/noteApp.jpg";
import productLister from "../Assets/productLister.jpeg";

const Project = () => {
  const clientProjects = [
    {
      img: dashboard,
      title: "Student Dashboard",
      fe: "https://github.com/Raja1919/zen-student-dashboard-frontend",
      be: "https://github.com/Raja1919/zen-student-dashboard-backend",
      desc: "Empowering students with effective learning progress tracking, a user-friendly React UI, and secure authentication. Integration with Node.js and Express.js backend APIs ensures seamless access to course materials and real-time grade tracking. MongoDB and Git are leveraged for data storage and version control.",
      source: "https://monumental-lolly-62d3ef.netlify.app/",
    },
    {
      img: urlShort,
      title: "UrlShortener",
      fe: "https://github.com/Raja1919/urlShortener-Frontend",
      be: "https://github.com/Raja1919/urlShortener-Backend",
      desc: "MERN-based URL shortener providing a concise, user-friendly, and secure experience. React handles user input, Node.js/Express processes backend operations, and MongoDB stores mappings. Security features include input validation, potential authentication, and rate-limiting. Deployed on platforms like Netlify.",
      source: "https://monumental-semifreddo-4bee5c.netlify.app/",
    },
    {
      img: productLister,
      title: "ProductLister",
      fe: "https://github.com/Raja1919/Product_Lister_frontend",
      be: "https://github.com/Raja1919/Product_lister_backend",
      desc: "Efficient city corporation complaint management. User-friendly React frontend for complaint submission, tracking, and resolution updates. Node.js and Express.js backend manages complaint data and database interactions.",
      source: "https://lambent-kringle-33efaf.netlify.app",
    },
    {
      img: noteApp,
      title: "NoteApp",
      fe: "https://github.com/Raja1919/noteApp-Frontend",
      be: "https://github.com/Raja1919/noteApp_Backend",
      desc: "NoteApp: Your go-to MERN stack note-taking app. Capture ideas effortlessly with MongoDB, Express.js, React, and Node.js. Streamlined, responsive, and ready to organize your thoughts on the fly.",
      source: "https://imaginative-gingersnap-10e28d.netlify.app/",
    },
  ];

  return (
    <div className="work_container">
      <h1 className="project_heading">My Projects</h1>
      <div className="project_container">
        {clientProjects.map((project, index) => (
          <div className="project_card" key={index}>
            <img src={project.img} alt={project.title} />
            <h2 className="project_title">{project.title}</h2>
            <div className="project_desc">
              <p>{project.desc}</p>
              <a
                href={project.source}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <div className="project_btn">
                <a
                  href={project.fe}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Repo
                </a>
                <a
                  href={project.be}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
