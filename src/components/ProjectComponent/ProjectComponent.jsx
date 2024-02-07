import React from "react";
import "./styles.css";
import SelectCategoryComponent from "../SelectCategoryComponent/SelectCategoryComponent";

function ProjectComponent({ visited }) {
  const handleSelect = () => {};
  return (
    <article className="projectSection">
      <section className="aboutMeSectionChild title">
        <h2 className={`titleStyle ${visited ? "active" : ""}`}>Proyectos</h2>
        <div className={`underlineContainer ${visited ? "active" : ""}`}></div>
      </section>

      <section className="showcaseProjects">
        <SelectCategoryComponent handleSelect={handleSelect} />
        <div>prueba</div>
      </section>
    </article>
  );
}

export default ProjectComponent;
