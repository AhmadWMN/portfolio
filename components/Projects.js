import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "",
      title: "React Portfolio Website",
      Company: "Bombastic",
      emailCompany: "",
      description:
        "A personal portfolio website built using React and styled with CSS.",
      technologies: "React, CSS",
      members: {},
      githubLink: "https://github.com/yourusername/react-portfolio",
      Link: "https://example.com",
    },
    {
      id: 2,
      image: "ecommerceImage.png",
      title: "E-commerce Website",
      company: "Bombastic",
      emailCompany: "info@Bombastic.ps",
      description:
        "I was a member of the team that developed the front-end of an e-commerce platform built with React and Context, integrated with a backend API.",
      technologies: "React, Context, REST API",
      members: [
        {
          name: "Wissam Arda",
          email: "wissam@bombastic.ps",
          description: "Full-stack",
          role: "Team leader",
        },
        {
          name: "Ahmad Nabhan",
          email: "ahmadwnabhan2023@gmail.com",
          description: "Front-end developer",
          role: "Front-end",
        },
      ],
      teamLeader: "",
      githubLink: "",
      Link: "https://hamarshehstore.com/",
    },
    {
      id: 3,
      image: "showcase.png",
      title: "Showcase clothing Website",
      company: "",
      emailCompany: "info@Bombastic.ps",
      description:
        "I was a member of the team that developed the front-end of an e-commerce platform built with React and Context, integrated with a backend API.",
      technologies: "React, Context, REST API",
      members: [
        {
          name: "Ahmad Nabhan",
          email: "ahmadwnabhan2023@gmail.com",
          description: "Front-end developer",
          role: "Front-end",
        },
      ],
      teamLeader: "",
      githubLink: "",
      Link: "https://ahmadwmn.github.io/ecommerce/",
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            Link={project.Link}
            members={project.members}
            company={project.company}
            emailCompany={project.emailCompany}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
