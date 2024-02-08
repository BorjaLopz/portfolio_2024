import React from "react";
import "./styles.css";

function ArticleProjectComponent({ project }) {
  return (
    <article className="articleProject">
      <img src={project.cover} alt={`Imagen de ${project.title}`} />
      <section className="hoverProject">
        <div className="titleAndTechnology">
          <h3>{project.title}</h3>
          <h5>{project.technology.join("  /  ")}</h5>
        </div>
        <div className="buttonProject">
          <div className="buttonKnowMore">saber mas</div>
        </div>
      </section>
    </article>
  );
}

export default ArticleProjectComponent;
