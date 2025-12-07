import React from "react";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaGit,
} from "react-icons/fa";
import "./Skill.css";

const skills = [
  { name: "JavaScript", icon: <FaCode />, level: "Advanced" },
  { name: "React", icon: <FaReact />, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Advanced" },
  { name: "Express.js", icon: <FaNodeJs />, level: "Advanced" },
  { name: "HTML / CSS", icon: (
    <>
      <FaHtml5 /> <FaCss3 />
    </>
  ), level: "Advanced" },
  { name: "MongoDB", icon: <FaDatabase />, level: "Intermediate" },
  { name: "SQL", icon: <FaDatabase />, level: "Intermediate" },
  { name: "Git", icon: <FaGit />, level: "Daily driver" },
];

const Skills = () => (
  <section className="skills">
    <div className="skills__inner">
      <div className="skills__header">
        <p className="eyebrow">Toolkit</p>
        <h2>Skills that keep projects moving</h2>
        <p className="skills__lede">
          A balanced mix of front-end craft, backend fundamentals, and delivery habits that reduce
          friction and keep teams aligned.
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="icon-badge">{skill.icon}</div>
            <div className="skill-copy">
              <p className="skill-name">{skill.name}</p>
              <p className="skill-level">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
