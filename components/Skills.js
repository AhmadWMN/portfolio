import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "SASS/SCSS",
    "Bootstrap",
    "Git",
    "RESTful APIs",
    "SQL",
    "MongoDB",
    "Firebase",
    "Responsive Web Design",
    "Agile Development",
    "UI/UX Design",
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
