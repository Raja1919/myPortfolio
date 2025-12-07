import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="topContent minimal">
      <div className="card">
        <p className="eyebrow">Raja</p>
        <h1 className="title">Full-stack Developer</h1>
        <p className="lede">Building reliable web apps that feel fast on mobile and laptop.</p>

        <div className="cta-row">
          <a
            className="primary-btn"
            href="https://drive.google.com/file/d/1PpiZaHWWVjC0_nsqPvuMfI44PsIETO5b/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="social-row">
          <a
            href="https://github.com/Raja1919"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/raja-e-160b4b159/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
