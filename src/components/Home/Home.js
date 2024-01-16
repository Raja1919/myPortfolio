import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons library
import "./Home.css";

const Home = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>I Am Raja</h1>
        <p>Full-Stack Developer</p>
        <a
          href="https://drive.google.com/file/d/1PpiZaHWWVjC0_nsqPvuMfI44PsIETO5b/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="topContent__downloadButton">Download CV</button>
        </a>
        <Link to="/project">
          <button className="topContent__workButton">My Work</button>
        </Link>
        <div className="topContent__socialButtons">
          <a
            href="https://github.com/Raja1919"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="topContent__logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/raja-e-160b4b159/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="topContent__logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
