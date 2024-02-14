import React, { useEffect, useState } from "react";
import "./styles.css";
import SkillComponent from "../SkillComponent/SkillComponent";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import toast from "react-hot-toast";

function SkillsContainer() {
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", percent: 70 },
    { id: 2, name: "CSS", percent: 60 },
    { id: 3, name: "JavaScript", percent: 75 },
    { id: 4, name: "ReactJS", percent: 70 },
    { id: 5, name: "Node.JS", percent: 70 },
    { id: 6, name: "MySQL", percent: 60 },
    { id: 7, name: "Git", percent: 70 },
  ]);
  const [toastShown, setToastShown] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const handleDrop = (draggedItem, droppedIndex) => {
    const updatedSkills = [...skills];
    const draggedSkill = skills.find((skill) => skill.id === draggedItem.id);

    updatedSkills.splice(updatedSkills.indexOf(draggedSkill), 1);
    updatedSkills.splice(droppedIndex, 0, draggedSkill);

    setSkills(updatedSkills);
  };

  useEffect(() => {
    // Verifica si los porcentajes están ordenados de mayor a menor o viceversa
    const isOrdered = isOrderedPercentages();
    if (isOrdered && !toastShown) {
      setToastShown(true);
      toast.success("¡Habilidades ordenadas!");
    } else if (!isOrdered) {
      setToastShown(false);
    }
  }, [skills, toastShown]);

  const isOrderedPercentages = () => {
    const percentages = skills.map((skill) => skill.percent);
    const ascendingOrder = [...percentages].sort((a, b) => a - b);

    return JSON.stringify(percentages) === JSON.stringify(ascendingOrder);
  };

  //Check if device is touchable or not
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in document.documentElement);
  }, []);

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <section className="skillsName">
        <ul className="listOfSkills">
          {skills.map((skill, index) => (
            <SkillComponent
              key={skill.id}
              id={skill.id}
              name={skill.name}
              percent={skill.percent}
              index={index}
              onDrop={handleDrop}
            />
          ))}
        </ul>
      </section>
    </DndProvider>
  );
}

export default SkillsContainer;
