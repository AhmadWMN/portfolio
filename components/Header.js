import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-logo">My Portfolio</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
