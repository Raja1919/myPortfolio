import React from "react";
import "./Project.css";

const Project = () => {
  const clientProjects = [
    {
      title: "Student Dashboard",
      fe: "https://github.com/Raja1919/zen-student-dashboard-frontend",
      be: "https://github.com/Raja1919/zen-student-dashboard-backend",
      desc: "Progress tracking, course material access, and secure auth with a React UI and Node/Express APIs backed by MongoDB.",
      source: "https://monumental-lolly-62d3ef.netlify.app/",
      stack: "React · Node · MongoDB · JWT",
    },
    {
      title: "URL Shortener",
      fe: "https://github.com/Raja1919/urlShortener-Frontend",
      be: "https://github.com/Raja1919/urlShortener-Backend",
      desc: "MERN-based link shortener with validation, rate limiting hooks, and friendly sharing URLs.",
      source: "https://monumental-semifreddo-4bee5c.netlify.app/",
      stack: "React · Express · MongoDB",
    },
    {
      title: "Product Lister",
      fe: "https://github.com/Raja1919/Product_Lister_frontend",
      be: "https://github.com/Raja1919/Product_lister_backend",
      desc: "Inventory app to add, edit, and categorize products with auth and CRUD APIs.",
      source: "https://lambent-kringle-33efaf.netlify.app",
      stack: "React · Node · MongoDB",
    },
    {
      title: "Note App",
      fe: "https://github.com/Raja1919/noteApp-Frontend",
      be: "https://github.com/Raja1919/noteApp_Backend",
      desc: "Responsive notes tool for quick capture with secure backend and clean UI.",
      source: "https://imaginative-gingersnap-10e28d.netlify.app/",
      stack: "React · Node · MongoDB",
    },
  ];

  return (
    <section className="work_container">
      <div className="work_inner">
        <div className="work_header">
          <p className="eyebrow">Selected Work</p>
          <h1 className="project_heading">Projects that solve real problems</h1>
          <p className="project_lede">
            A mix of personal builds and coursework projects, each focused on clarity, performance, and
            deployment-readiness.
          </p>
        </div>
        <div className="project_container">
          {clientProjects.map((project, index) => (
            <article className="project_card" key={index}>
              <div className="project_media">
                <span className="media_badge">{project.stack}</span>
                <p className="media_title">{project.title}</p>
              </div>
              <div className="project_body">
                <div className="project_top">
                  <h2 className="project_title">{project.title}</h2>
                  <p className="project_stack">{project.stack}</p>
                  <p className="project_desc">{project.desc}</p>
                </div>
                <div className="project_actions">
                  <a
                    href={project.source}
                    className="btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                  <div className="project_btn">
                    <a
                      href={project.fe}
                      className="btn ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Frontend
                    </a>
                    <a
                      href={project.be}
                      className="btn ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Backend
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
