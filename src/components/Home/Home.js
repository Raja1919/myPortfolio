import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>Mr.Raja</h1>
        <p>Full-Stack Developer</p>
        <a
          href="https://drive.google.com/file/d/19n-zE5oohh8jdeKoOCI8vCno61_JTllT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="topContent__downloadButton">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
