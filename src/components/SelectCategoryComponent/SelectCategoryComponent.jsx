import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function SelectCategoryComponent({ handleSelect }) {
  const [categorySelected, setCategorySelected] = useState("Todos");
  const [bgSelectPosition, setBgSelectPosition] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  const ulRef = useRef(null);
  const liRefs = {
    Todos: useRef(null),
    React: useRef(null),
    Javascript: useRef(null),
    NodeJS: useRef(null),
  };

  const handleSelectCategory = (_category) => {
    handleSelect(_category);
    setCategorySelected(_category);
  };

  useEffect(() => {
    if (ulRef.current && liRefs[categorySelected].current) {
      const ulRect = ulRef.current.getBoundingClientRect();
      const liRect = liRefs[categorySelected].current.getBoundingClientRect();
      const top = liRect.top - ulRect.top;
      const left = liRect.left - ulRect.left;
      const bottom = liRect.bottom - ulRect.top;
      const right = liRect.right - ulRect.left;
      setBgSelectPosition({ top, left, right, bottom });
    }
  }, [categorySelected]);

  useEffect(() => {
    /* QUINTA APROXIMACION */
    // const checkOverlap = () => {
    //   if (ulRef.current) {
    //     const ulRect = ulRef.current.getBoundingClientRect();
    //     console.log("ulRect", ulRect);

    //     Object.keys(liRefs).forEach((key) => {
    //       const liRect = liRefs[key].current.getBoundingClientRect();

    //       const isInsideLi =
    //         bgSelectPosition.left > liRect.left &&
    //         bgSelectPosition.right < liRect.right &&
    //         bgSelectPosition.top > liRect.top &&
    //         bgSelectPosition.bottom < liRect.bottom;

    //       console.log(`li[${categorySelected}]: `, liRect);

    //       liRefs[key].current.style.color = isInsideLi ? "white" : "black";
    //     });
    //   }
    // };

    // checkOverlap();

    // Limpia los colores al desmontar el componente o cambiar la categoría seleccionada
    // return () => {
    //   Object.keys(liRefs).forEach((key) => {
    //     liRefs[key].current.style.color = "black";
    //   });
    // };

    /*
     * @TODO: Hacer bien la animación para que se overlapee el bg con el li
     *
     */
    const checkOverlap = () => {
      Object.keys(liRefs).forEach((key) => {
        const ulRect = ulRef.current.getBoundingClientRect();
        const liRect = liRefs[key].current.getBoundingClientRect();
        // console.log("bgSelectPosition");
        // console.log(bgSelectPosition);

        // console.log("liRect");
        // console.log(liRect);
        const overlap =
          bgSelectPosition.left + ulRect.left < liRect.right &&
          bgSelectPosition.right + ulRect.left > liRect.left &&
          bgSelectPosition.top + ulRect.top < liRect.bottom &&
          bgSelectPosition.bottom + ulRect.top > liRect.top;

        // console.log("overlap");
        // console.log(overlap);

        liRefs[key].current.style.color = overlap ? "white" : "black";
      });
    };

    checkOverlap();

    // Limpia los colores al desmontar el componente o cambiar la categoría seleccionada
    return () => {
      Object.keys(liRefs).forEach((key) => {
        liRefs[key].current.style.color = "black";
      });
    };
  }, [bgSelectPosition]);

  return (
    <section className="selectCategory">
      <ul ref={ulRef}>
        <li
          ref={liRefs["Todos"]}
          className={`${categorySelected === "Todos" ? "active" : ""}`}
          onClick={() => handleSelectCategory("Todos")}
        >
          Todos
        </li>
        <li
          ref={liRefs["React"]}
          className={`${categorySelected === "React" ? "active" : ""}`}
          onClick={() => handleSelectCategory("React")}
        >
          React
        </li>
        <li
          ref={liRefs["Javascript"]}
          className={`${categorySelected === "Javascript" ? "active" : ""}`}
          onClick={() => handleSelectCategory("Javascript")}
        >
          JavaScript
        </li>
        <li
          ref={liRefs["NodeJS"]}
          className={`${categorySelected === "NodeJS" ? "active" : ""}`}
          onClick={() => handleSelectCategory("NodeJS")}
        >
          NodeJS
        </li>
        <li
          className="bgSelect"
          style={{ top: bgSelectPosition.top, left: bgSelectPosition.left }}
        ></li>
      </ul>
    </section>
  );
}

export default SelectCategoryComponent;
