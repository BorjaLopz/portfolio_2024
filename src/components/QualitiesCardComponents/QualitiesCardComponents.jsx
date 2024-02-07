import React from "react";
import "./styles.css";

function QualitiesCardComponents({ icon, name, description }) {
  return (
    <li className="qualityCard">
      <img src={`/Icons/${icon}.svg`} alt={`Icono de ${name}`} />
      <h2>{name}</h2>
      <p>{description}</p>
    </li>
  );
}

export default QualitiesCardComponents;
