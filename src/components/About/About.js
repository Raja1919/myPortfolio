import React from "react";
import "./About.css";

const About = () => {
  const highlights = [
    {
      title: "Problem solver",
      copy: "Thrives on breaking big ideas into shippable milestones with thoughtful UX considerations.",
    },
    {
      title: "Team collaborator",
      copy: "Comfortable pairing, writing clean hand-offs, and contributing to design systems.",
    },
    {
      title: "Continuous learner",
      copy: "Recently completed a Full Stack program at Guvi Geek Network Pvt Ltd and keeps exploring new patterns.",
    },
  ];

  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__header">
          <p className="eyebrow">About Raja</p>
          <h2>Engineer with a builder's mindset</h2>
          <p className="about__lede">
            Based in Kalpakkam near Chennai, Raja moved from mechanical engineering to modern web
            development, bringing curiosity, discipline, and a product-first approach to every
            engagement.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__card">
            <h3>Path so far</h3>
            <p>
              Studied Mechanical Engineering (Diploma, 2018) at P.S.B Polytechnic College and later
              reskilled through the Full Stack Development course at <strong>Guvi Geek Network Pvt Ltd</strong>.
            </p>
            <p>
              Comfortable across the MERN stack with deployment experience on Netlify and other cloud
              hosts. Currently focusing on building accessible, responsive interfaces.
            </p>
          </div>

          <div className="about__card">
            <h3>How work happens</h3>
            <ul>
              <li>Lead with clear requirements, wireframes, and small iterations.</li>
              <li>Pair React UI polish with API rigor in Node/Express.</li>
              <li>Ship mobile-first, instrumented experiences with sensible defaults.</li>
            </ul>
          </div>

          <div className="about__card">
            <h3>Highlights</h3>
            <div className="chips">
              {highlights.map((item) => (
                <div className="chip" key={item.title}>
                  <p className="chip__title">{item.title}</p>
                  <p className="chip__copy">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
