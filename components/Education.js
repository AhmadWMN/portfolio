import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-item">
        <h3>Bachelor of Science in Computer Science</h3>
        <p>University Name, City, Country</p>
        <p className="education-date">Graduated: May 2020</p>
      </div>

      <div className="education-item">
        <h3>High School Diploma</h3>
        <p>School Name, City, Country</p>
        <p className="education-date">Graduated: June 2016</p>
      </div>
    </div>
  );
};

export default Education;
