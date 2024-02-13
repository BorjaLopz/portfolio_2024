import React, { useEffect, useState } from "react";
import "./styles.css";
import projects from "../../proyectos.json";
import ArticleProjectComponent from "../ArticleProjectComponent/ArticleProjectComponent";
import ShowDetailsProject from "../ShowDetailsProject/ShowDetailsProject";

function ShowcaseProjectComponent({ category }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projectOrder, setProjectOrder] = useState({});

  useEffect(() => {
    const filtered =
      category && category !== "Todos"
        ? projects.map((p) => ({
            ...p,
            hidden: !p.category.includes(category),
          }))
        : projects.map((p) => ({
            ...p,
            hidden: false,
          }));

    setFilteredProjects(filtered);
  }, [category]);

  useEffect(() => {
    setOrderProject(); // Llama a setOrderProject después de setFilteredProjects
  }, [filteredProjects]);

  const setOrderProject = () => {
    let order = 0;

    filteredProjects.forEach((p) => {
      if (p.hidden === false) {
        p.order = order;
        order += 1;
      } else {
        p.order = projects.length - order;
      }
    });
  };

  useEffect(() => {
    const initialOrder = projects.reduce(
      (acc, project, index) => ({
        ...acc,
        [project.id]: index,
      }),
      {}
    );

    setProjectOrder(initialOrder);
  }, [filteredProjects]);

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
        {filteredProjects.map((p) => (
          <ArticleProjectComponent
            key={p.id}
            project={p}
            handleSelectProject={handleSelectProject}
            selectedProject={selectedProject}
            classNameHidden={p.hidden ? "hidden" : ""}
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
