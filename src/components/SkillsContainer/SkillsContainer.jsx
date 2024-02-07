import React from "react";
import "./styles.css";
import SkillComponent from "../SkillComponent/SkillComponent";

function SkillsContainer() {
  return (
    <section className="skillsName">
      <ul className="listOfSkills">
        <SkillComponent name={"HTML"} percent={70} />
        <SkillComponent name={"CSS"} percent={60} />
        <SkillComponent name={"JavaScript"} percent={75} />
        <SkillComponent name={"ReactJS"} percent={70} />
        <SkillComponent name={"Node.JS"} percent={70} />
        <SkillComponent name={"MySQL"} percent={60} />
        <SkillComponent name={"Git"} percent={70} />
      </ul>
    </section>
  );
}

export default SkillsContainer;
