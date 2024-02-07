import React from "react";
import "./styles.css";

function SkillComponent({ name, percent }) {
  return (
    <li className="skillItem">
      <span className="skillName">{name}</span>
      <div className="skillBar">
        <div className="skillFill" data-percent={percent}></div>
      </div>
    </li>
  );
}

export default SkillComponent;
