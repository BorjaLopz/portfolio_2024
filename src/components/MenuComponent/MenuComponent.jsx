import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link as ScrollLink } from "react-scroll";

function MenuComponent({ currentSection, handleOnClick }) {
  const [transitionEnded, setTransitionEnded] = useState(false);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setTransitionEnded(true);
    };

    const menuElement = document.querySelector(".menuHeader");

    menuElement.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      menuElement.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);
  return (
    <nav
      className={`menuHeader ${
        currentSection !== "presentacion" ? "menuActive" : "menuDesactive"
      }
      ${transitionEnded ? "stickyAfterTransition" : ""}`}
    >
      <menu>
        <ul>
          <ScrollLink
            to="presentationComponentArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("presentationComponentArticle")}
            className={`${
              currentSection === "presentationComponentArticle"
                ? "linkActive"
                : ""
            }`}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="AboutMeArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("AboutMe")}
            className={`${currentSection === "AboutMe" ? "linkActive" : ""}`}
          >
            Sobre mi
          </ScrollLink>

          <ScrollLink
            to="ProjectArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("Project")}
            className={`${currentSection === "Project" ? "linkActive" : ""}`}
          >
            Portfolio
          </ScrollLink>

          <ScrollLink
            to="ContactArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("Contact")}
            className={`${currentSection === "Contact" ? "linkActive" : ""}`}
          >
            Contacto
          </ScrollLink>
        </ul>
      </menu>
    </nav>
  );
}

export default MenuComponent;
