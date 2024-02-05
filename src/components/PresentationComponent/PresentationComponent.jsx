import React from "react";
import "./styles.css";
import arrow from "/Icons/arrow.png";
import { Link as ScrollLink } from "react-scroll";
import BackgroundComponent from "../BackgroundComponent/BackgroundComponent";
BackgroundComponent;

function PresentationComponent() {
  return (
    <section className="displaySection presentationSection">
      {/* <BackgroundComponent /> */}
      <article className="textPresentation">
        Hola, soy <span className="highlight">Borja López Díaz</span>. <br />
        <p>Soy desarrollador web full stack</p>
      </article>

      <div className="button page-link">
        <ScrollLink to="AboutMeArticle" smooth={true} duration={300}>
          Mira mi trabajo <img className="arrowAnimation" src={arrow} />
        </ScrollLink>
      </div>
    </section>
  );
}

export default PresentationComponent;
