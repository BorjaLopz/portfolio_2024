import React from "react";
import "./styles.css";
import QualitiesCardComponents from "../QualitiesCardComponents/QualitiesCardComponents";
import DescriptionComponent from "../DescriptionComponent/DescriptionComponent";
import SkillsContainer from "../SkillsContainer/SkillsContainer";

function AboutMeComponent({ visited }) {
  return (
    <article className="aboutMeArticle">
      <section className="aboutMeSection">
        <div className="aboutMeSectionChild title">
          <h2 className={`titleStyle ${visited ? "active" : ""}`}>Sobre mi</h2>
          <div
            className={`underlineContainer ${visited ? "active" : ""}`}
          ></div>
        </div>
        <div className="aboutMeSectionChild qualities">
          <ul>
            <QualitiesCardComponents
              icon={"Web Dev"}
              name={"Desarrollo técnico"}
              description={
                "Poseo habilidades sólidas en el desarrollo web full stack. Desde interfaces hasta lógica de servidor."
              }
            />
            <QualitiesCardComponents
              icon={"Responsive Design"}
              name={"Diseño Responsive"}
              description={
                "Mis webs funcionarán en cualquier dispositivo, grande o pequeño. "
              }
            />
            <QualitiesCardComponents
              icon={"Collaborate"}
              name={"Colaboración"}
              description={
                "Trabajo de manera colaborativa con otros miembros del equipo, aportando ideas y soluciones de manera constructiva."
              }
            />
            <QualitiesCardComponents
              icon={"BugFixing"}
              name={"Solución de problemas"}
              description={
                "Disfruto enfrentándome a desafíos técnicos y resolviendo problemas de manera eficiente. "
              }
            />
          </ul>
        </div>
        <div className="aboutMeSectionChild descriptionSkills">
          <DescriptionComponent />
          <SkillsContainer />
        </div>
      </section>
    </article>
  );
}

export default AboutMeComponent;
