import React from "react";
import "../styles/ProjectItem.css";

const ProjectItem = ({
  title,
  description,
  technologies,
  githubLink,
  Link,
  members = [],
  company,
  emailCompany,
  image, // Dynamic filename or path
}) => {
  const membersList = Array.isArray(members) ? members : [];

  // Use `require` for dynamic paths
  const imageUrl = image ? require(`../assets/images/${image}`) : null;

  return (
    <div className="project-item">
      <h3>{title}</h3>
      {imageUrl ? (
        <img src={imageUrl} alt={title} />
      ) : (
        <p>No image available</p>
      )}
      <p>{description}</p>
      <div className="technologies">
        <strong>Technologies used:</strong> {technologies}
      </div>
      {company !== "" && (
        <div className="members-row">
          <p>Company: {company}</p>
          <p>
            Company email: <a href={`mailto:${emailCompany}`}>{emailCompany}</a>
          </p>
        </div>
      )}
      <div>
        {membersList.map((member) => (
          <div className="members-row" key={member.email}>
            <p>{member.name}</p>
            <a href={`mailto:${member.email}`}>{member.email}</a>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {Link && (
          <a href={Link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
