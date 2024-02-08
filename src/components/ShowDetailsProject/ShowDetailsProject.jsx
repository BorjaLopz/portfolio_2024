import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function ShowDetailsProject({ project, handleOnClose }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Añadir la clase 'active' después de que el componente se monta
    setIsActive(true);

    // Eliminar la clase 'active' cuando el componente se desmonta
    return () => {
      setIsActive(false);
    };
  }, []);
  return (
    <>
      {project !== null ? (
        <section className="showDetailsProject">
          <article className={`showDetailsArticle ${isActive ? "active" : ""}`}>
            <img src={project?.cover} alt={`Imagen de ${project?.title}`} />
            <article className="projectDescription">
              <h2>{project?.title}</h2>
              <p>{project?.description}</p>
              <div className="containerShowAndClose">
                {project?.deploy && (
                  <a href={project?.deploy} className="deploy" target="_blank">
                    <img src="/Icons/ExternalLink.svg" alt="" />
                    deploy
                  </a>
                )}

                {project?.github && (
                  <a href={project?.github} className="github" target="_blank">
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
      ) : (
        <></>
      )}
    </>
    // <section className="showDetailsProject">
    //   <article className="showDetailsArticle">
    //     <img src={project?.cover} alt={`Imagen de ${project?.title}`} />
    //     <article className="projectDescription">
    //       <h2>{project?.title}</h2>
    //       <p>{project?.description}</p>
    //       <div className="containerShowAndClose">
    //         {project?.deploy && (
    //           <a href={project?.deploy} className="deploy" target="_blank">
    //             <img src="/Icons/ExternalLink.svg" alt="" />
    //             deploy
    //           </a>
    //         )}

    //         {project?.github && (
    //           <a href={project?.github} className="github" target="_blank">
    //             ver código
    //           </a>
    //         )}

    //         <button className="closeProject" onClick={handleOnClose}>
    //           Cerrar
    //         </button>
    //       </div>
    //     </article>
    //   </article>
    // </section>
  );
}

export default ShowDetailsProject;
