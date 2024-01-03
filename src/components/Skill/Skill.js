import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  { name: "JavaScript", icon: <FaCode />, color: "#f39c12" },
  { name: "React", icon: <FaReact />, color: "#3498db" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#27ae60" },
  { name: "Express.js", icon: <FaNodeJs />, color: "#27ae60" },
  {
    name: "HTML/CSS",
    icon: (
      <>
        <FaHtml5 /> <FaCss3 />
      </>
    ),
    color: "#e74c3c",
  },
  { name: "MongoDB", icon: <FaDatabase />, color: "#9b59b6" },
  { name: "SQL", icon: <FaDatabase />, color: "#9b59b6" },
  { name: "Git", icon: <FaGit />, color: "#34495e" },
];

const Skill = ({ skill, index }) => (
  <Col
    key={index}
    xs={12}
    md={3}
    className="skill-item text-center"
    style={{ backgroundColor: skill.color }}
  >
    <div className="card-content">
      <h1>{skill.icon}</h1>
      <h4>{skill.name}</h4>
    </div>
  </Col>
);

const Skills = () => (
  <div className="skills">
    <Container>
      <h2 className="text-center mb-4">My Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} index={index} />
        ))}
      </Row>
    </Container>
  </div>
);

export default Skills;
