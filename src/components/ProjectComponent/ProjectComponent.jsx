import React, { useState } from "react";
import "./styles.css";
import SelectCategoryComponent from "../SelectCategoryComponent/SelectCategoryComponent";
import ShowcaseProjectComponent from "../ShowcaseProjectComponent/ShowcaseProjectComponent";

function ProjectComponent({ visited }) {
  const [categorySelected, setCategorySelected] = useState("Todos");
  const handleSelect = (_category) => {
    setCategorySelected(_category);
  };
  return (
    <section className="projectSection">
      <section className="projectSectionChild title">
        <h2 className={`titleStyle ${visited ? "active" : ""}`}>Proyectos</h2>
        <div className={`underlineContainer ${visited ? "active" : ""}`}></div>
      </section>

      <section className="showcaseProjects">
        <SelectCategoryComponent handleSelect={handleSelect} />
        <ShowcaseProjectComponent category={categorySelected} />
      </section>
    </section>
  );
}

export default ProjectComponent;
