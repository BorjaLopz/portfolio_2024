import React from "react";
import "./styles.css";
function AboutMeComponent({ active }) {
  return (
    <article className="aboutMeArticle">
      <section className="aboutMeSection">
        <div className="aboutMeSectionChild">
          <h2 className={`titleStyle ${active}`}>Sobre mi</h2>
        </div>
        <div className="aboutMeSectionChild">
          {/* Contenido de la segunda aboutMeSectionChild */}Cualidades
        </div>
        <div className="aboutMeSectionChild">
          {/* Contenido de la tercera aboutMeSectionChild */}Breve Descripción y
          Skills
        </div>
      </section>
    </article>
  );
}

export default AboutMeComponent;
