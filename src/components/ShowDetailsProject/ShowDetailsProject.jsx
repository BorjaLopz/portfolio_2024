import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import ImageCarouselComponent from "../ImageCarouselComponent/ImageCarouselComponent";

function ShowDetailsProject({ project, handleOnClose }) {
  const [isActive, setIsActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleTransitionEnd = () => {
    if (isClosing) {
      setIsActive(false);
      setIsClosing(false);
      handleOnClose();
    }
  };

  useEffect(() => {
    if (project) {
      // Si se abre
      setIsActive(true);

      // Después de 10 ms (tiempo suficiente para que se apliquen las clases),
      // actualiza el estado para iniciar la animación de cierre
      setTimeout(() => {
        setIsClosing(false);
      }, 500);
    } else {
      // Si se cierra
      setIsClosing(true);
    }
  }, [project]);

  return (
    <>
      <section className={`showDetailsProject ${isActive ? "visible" : ""}`}>
        <article
          className={`showDetailsArticle ${
            isActive && !isClosing ? "active" : ""
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <ImageCarouselComponent
            projectImages={project?.images}
            projectName={project?.title}
            projectID={project?.id}
          />
          <article className="projectDescription">
            <h2>{project?.title}</h2>
            <h3>{project?.shortDescription}</h3>
            <div className="containerSpacer"></div>
            <p>{project?.description}</p>
            <div className="containerShowAndClose">
              {project?.deploy && (
                <a href={project?.deploy} className="deploy" target="_blank">
                  {/* <img src="/Icons/ExternalLink.svg" alt="" /> */}
                  deploy
                </a>
              )}

              {project?.github && (
                <a href={project?.github} className="github" target="_blank">
                  ver código
                </a>
              )}

              <button className="closeProject" onClick={handleClose}>
                Cerrar
              </button>
            </div>
          </article>
        </article>
      </section>
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
