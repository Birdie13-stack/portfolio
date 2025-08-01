import React from "react";
import github from "../assets/Icons/akar-icons_github-fill.jpg";
import link from "../assets/Icons/link.jpg";
import { ProjectData } from "../ProjectData";

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <p className="stack-text">Things I've built so far</p>
      <div className="project-cards">
        {ProjectData.map((project) => (
          <div className="project-card">
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <p className="project-stack">Tech Stack: {project.stack}</p>

            <div className="project-links">
              <p>
                <img src={link} alt="" />
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Preview
                </a>
              </p>

              <p className="github-link">
                <img src={github} alt="" />
                <a href={project.repo} target="_blank" rel="noreferrer">
                  View Code
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
