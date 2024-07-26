import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> example@email.com
        </p>
        <p>
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p>
          <strong>WhatsApp:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Facebook:</strong>{" "}
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Profile
          </a>
        </p>
        <p>
          <strong>Address:</strong> 123 Street, City, Country
        </p>
      </div>
    </div>
  );
};

export default Contact;
