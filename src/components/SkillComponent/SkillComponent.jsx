import React from "react";
import "./styles.css";

function SkillComponent({ name, percent }) {
  console.log("name");
  console.log(name);
  console.log("percent");
  console.log(percent);
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
