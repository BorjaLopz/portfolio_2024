import React from "react";
import { useDrag, useDrop } from "react-dnd";
import "./styles.css";

function SkillComponent({ id, name, percent, index, onDrop }) {
  const [{ isDragging }, drag] = useDrag({
    type: "SKILL",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "SKILL",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        onDrop(draggedItem, index);
      }
    },
  });

  return (
    <li
      ref={(node) => drag(drop(node))}
      className="skillItem"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <span className="skillName">{name}</span>
      <div className="skillBar">
        <div className="skillFill" data-percent={percent}></div>
      </div>
    </li>
  );
}

export default SkillComponent;
