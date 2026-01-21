import React from "react";
import github from "../assets/Icons/github.jpg";
import twitter from "../assets/Icons/twitter.jpg";
import linkedin from "../assets/Icons/linkedin.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="reach">
        <p>+234 810 258 8140</p>
        <p>birdievsq@gmail.com</p>
        <section className="socials">
          <a
            href="https://github.com/Birdie13-stack"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github Icon" />
          </a>

          <a
            href="https://twitter.com/jahnenyenwa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter Icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/chinenye-oluyede"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
        </section>
      </div>
      <hr />

      <div className="last-section">
        <nav className="footer-nav">
          <Link to="/" className="section-link">
            Home
          </Link>
          <a href="#about" className="section-link">
            About
          </a>
          <a href="#tech-stack" className="section-link">
            Stack
          </a>
          <a href="#projects" className="section-link">
            Projects
          </a>
          <Link to="/contact">Contact</Link>
        </nav>

        <p>
          Made by <b>Chinenye</b> with love and a cup of tea☕️
        </p>
      </div>
    </div>
  );
}

export default Footer;
