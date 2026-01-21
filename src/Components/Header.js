import React from "react";
import logo from "../assets/logo.jpg";
import github from "../assets/Icons/github.jpg";
import twitter from "../assets/Icons/twitter.jpg";
import linkedin from "../assets/Icons/linkedin.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav className="header-nav">
        <Link to="/" className="section-link">
          Home
        </Link>
        <Link to="/about" className="section-link">
          About
        </Link>
        <a href="#tech-stack" className="section-link">
          Tech Stack
        </a>
        <a href="#projects" className="section-link">
          Projects
        </a>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="socials">
        <a
          href="https://github.com/Birdie13-stack"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github Icon" />
        </a>

        <a
          href="https://twitter.com/thatbirdintech"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter Icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/chinenye-oluyede-72455a212/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn Icon" />
        </a>
      </div>

      <div className="socials"></div>
    </div>
  );
}

export default Header;
