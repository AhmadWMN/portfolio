import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Software Engineer</h3>
        <p>Company Name, City, Country</p>
        <p className="experience-date">January 2020 - Present</p>
        <ul>
          <li>Developed frontend components using React and Redux.</li>
          <li>Implemented RESTful APIs using Node.js and Express.</li>
          <li>
            Collaborated with cross-functional teams to deliver projects on
            time.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Intern</h3>
        <p>Company Name, City, Country</p>
        <p className="experience-date">May 2018 - August 2018</p>
        <ul>
          <li>Assisted in testing and debugging applications.</li>
          <li>
            Learned Agile methodologies and project management techniques.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
