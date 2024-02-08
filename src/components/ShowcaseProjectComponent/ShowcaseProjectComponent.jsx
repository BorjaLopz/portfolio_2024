import React, { useEffect, useState } from "react";
import "./styles.css";
import projects from "../../proyectos.json";
import ArticleProjectComponent from "../ArticleProjectComponent/ArticleProjectComponent";
import ShowDetailsProject from "../ShowDetailsProject/ShowDetailsProject";

function ShowcaseProjectComponent({ category }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (_project) => {
    setSelectedProject(_project);
  };

  const handleOnClose = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="showcaseProjectSection">
        {/* Filtro de proyectos */}
        {projects.map((p) => (
          <ArticleProjectComponent
            key={p.id}
            project={p}
            handleSelectProject={handleSelectProject}
            selectedProject={selectedProject}
          />
        ))}
      </section>
      <ShowDetailsProject
        project={selectedProject}
        handleOnClose={handleOnClose}
      />
      {/* {selectedProject !== null && (
        <ShowDetailsProject
          project={selectedProject}
          handleOnClose={handleOnClose}
        />
      )} */}
    </>
  );
}

export default ShowcaseProjectComponent;
