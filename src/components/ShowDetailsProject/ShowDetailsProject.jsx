import React, { useEffect, useRef } from "react";
import "./styles.css";

function ShowDetailsProject({ project, handleOnClose }) {
  return (
    <section className="showDetailsProject">
      <article className="showDetailsArticle">
        <img src={project.cover} alt={`Imagen de ${project.title}`} />
        <article className="projectDescription">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="containerShowAndClose">
            {project.deploy && (
              <a href={project.deploy} className="deploy" target="_blank">
                <img src="/Icons/ExternalLink.svg" alt="" />
                deploy
              </a>
            )}

            {project.github && (
              <a href={project.github} className="github" target="_blank">
                ver código
              </a>
            )}

            <button className="closeProject" onClick={handleOnClose}>
              Cerrar
            </button>
          </div>
        </article>
      </article>
    </section>
  );
}

export default ShowDetailsProject;
