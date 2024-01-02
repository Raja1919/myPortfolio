import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="container">
        <section className="section">
          <h3>Introduction</h3>
          <p>
            Hello, I'm Raja, a passionate individual and a recent graduate seeking opportunities in the tech industry.
            Originally from Kalpakkam, I completed my schooling at the Government Higher Secondary School in Sadras and
            pursued a diploma in Mechanical Engineering in 2018 at P.S.B Polytechnic College in Kelambakkam.
          </p>
        </section>

        <section className="section">
          <h3>Tech Journey</h3>
          <p>
            My journey into the tech world started when I successfully completed a Full Stack Development course at{" "}
            <b>Guvi Geek Network Pvt Ltd.</b> This experience not only added valuable skills to my arsenal but also
            fueled my passion for technology and problem-solving.
          </p>
        </section>

        <section className="section">
          <h3>Professional Traits</h3>
          <p>
            As a fresher, I bring a fresh perspective, a hunger for knowledge, and a strong commitment to contribute
            effectively to any team or project. I am enthusiastic about turning ideas into reality and thrive in dynamic
            and collaborative environments.
          </p>
        </section>

        <section className="section">
          <h3>Portfolio and Future</h3>
          <p>
            Explore my portfolio to get a closer look at my projects and the skills I've acquired on this journey. I'm
            excited about the prospect of joining a team where I can continue to learn, grow, and contribute meaningfully.
            Let's connect and explore new and exciting opportunities together!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
