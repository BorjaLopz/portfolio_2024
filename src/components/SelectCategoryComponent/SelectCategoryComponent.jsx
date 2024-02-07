import React, { useState } from "react";
import "./styles.css";

function SelectCategoryComponent({ handleSelect }) {
  const [categorySelected, setCategorySelected] = useState("Todos");
  return (
    <section className="selectCategory">
      <ul>
        <li className={`${categorySelected === "Todos" ? "active" : ""}`}>
          Todos
        </li>
        <li className={`${categorySelected === "React" ? "active" : ""}`}>
          React
        </li>
        <li className={`${categorySelected === "Javascript" ? "active" : ""}`}>
          JavaScript
        </li>
        <li className={`${categorySelected === "NodeJS" ? "active" : ""}`}>
          NodeJS
        </li>
      </ul>
    </section>
  );
}

export default SelectCategoryComponent;
