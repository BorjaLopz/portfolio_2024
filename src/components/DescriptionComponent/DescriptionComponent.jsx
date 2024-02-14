import React from "react";
import "./styles.css";

function DescriptionComponent() {
  const URL_CV = "/Borja López Díaz. CV. 2024.pdf";
  return (
    <section className="descriptionImage">
      <div className="hexagonImage"></div>
      <p className="description">
        Soy un apasionado desarrollador web fullstack. Mi formación sólida
        abarca el frontend y backend de sitios web.
        <br />
        Podras conocerme más a traves de{" "}
        <span className="importantText">
          <a href={URL_CV} download>
            mi CV
          </a>
        </span>
      </p>
    </section>
  );
}

export default DescriptionComponent;
