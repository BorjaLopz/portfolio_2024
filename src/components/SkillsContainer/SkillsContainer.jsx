import React from "react";
import "./styles.css";
import SkillComponent from "../SkillComponent/SkillComponent";

function SkillsContainer() {
  return (
    <section className="skillsName">
      <ul className="listOfSkills">
        <SkillComponent name={"HTML"} percent={70} />
        <SkillComponent name={"CSS"} percent={60} />
        <SkillComponent name={"javascript"} percent={75} />
        <SkillComponent name={"react"} percent={70} />
        <SkillComponent name={"node.js"} percent={70} />
        <SkillComponent name={"Mysql"} percent={60} />
        <SkillComponent name={"git"} percent={70} />
      </ul>
    </section>
  );
}

export default SkillsContainer;
