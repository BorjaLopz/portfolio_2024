import React from "react";
import "./styles.css";
import arrow from "/Icons/arrow.png";
import { Link as ScrollLink } from "react-scroll";
import BackgroundComponent from "../BackgroundComponent/BackgroundComponent";
BackgroundComponent;

function PresentationComponent({ handleOnClick }) {
  return (
    <section className="displaySection presentationSection">
      <article className="textPresentation">
        Hola, soy <span className="highlight">Borja López Díaz</span>. <br />
        <p>Soy desarrollador web full stack</p>
      </article>

      <ScrollLink
        to="AboutMeArticle"
        smooth={true}
        duration={300}
        onClick={() => handleOnClick("AboutMe")}
      >
        <div className="button page-link">
          Mira mi trabajo <img className="arrowAnimation" src={arrow} />
        </div>
      </ScrollLink>
    </section>
  );
}

export default PresentationComponent;
