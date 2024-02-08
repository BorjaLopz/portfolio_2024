import React from "react";
import "./styles.css";
import projects from "../../proyectos.json";
import ArticleProjectComponent from "../ArticleProjectComponent/ArticleProjectComponent";

function ShowcaseProjectComponent({ category }) {
  return (
    <section className="showcaseProjectSection">
      {/* Filtro de proyectos */}
      {projects.map((p) => (
        <ArticleProjectComponent project={p} />
      ))}
    </section>
  );
}

export default ShowcaseProjectComponent;
