import "./Project.css";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);
  return (
    <section className="projects-section" id="project">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="button live-btn"
                  >
                    <span className="me-1">Live</span> <MdOutlineLiveTv />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className=" button github-btn"
                  >
                    <span className="me-1">GitHub</span> <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center my-5 show-more">
          <p className="bg-primary">
            Show more <FaArrowRight />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
