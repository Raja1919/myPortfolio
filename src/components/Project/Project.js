// ProjectContainer.js
import React, { useState } from "react";
import ProjectItem from "../Project/Project";
import "./Project.css";

const Project = () => {
  const [chosen, setChosen] = useState(true);

  const clientProjects = [
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F20723-mario-image&psig=AOvVaw1kRoJO5pcR0D0CJQ4AtDUB&ust=1704299396941000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJiXvpeQv4MDFQAAAAAdAAAAABAE",
      title: "TheFindtalk",
      desc: "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "https://thefindtalk.com/",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F20723-mario-image&psig=AOvVaw1kRoJO5pcR0D0CJQ4AtDUB&ust=1704299396941000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJiXvpeQv4MDFQAAAAAdAAAAABAE",
      title: "AR Projects Ltd",
      desc: "AR Projects Ltd is an E-Learning company which provides coding training for both school and college students.",
      link: "https://www.arprojectsltd.com/",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F20723-mario-image&psig=AOvVaw1kRoJO5pcR0D0CJQ4AtDUB&ust=1704299396941000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJiXvpeQv4MDFQAAAAAdAAAAABAE",
      title: "Complaint Management System",
      desc: "It is used in city corporations to handle complaints for particular areas corporation.",
      link: "https://corporation-management-system.netlify.app/",
    },
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F20723-mario-image&psig=AOvVaw1kRoJO5pcR0D0CJQ4AtDUB&ust=1704299396941000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJiXvpeQv4MDFQAAAAAdAAAAABAE",
      title: "Firegram",
      desc: "An online platform for everyone to share their images.",
      link: "https://firegram-65fdc.web.app/",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <p>
        Here are some projects that are changing many people's lives and some
        clone works of large tech companies.
      </p>
      <div className="projectContainer__title">
        <h4
          className={chosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChosen(true)}
        >
          Client Projects
        </h4>
      </div>

      {chosen && (
        <div className="projectContainer__projects">
          {clientProjects.map((project, index) => (
            <ProjectItem
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
