import React from "react";
import "./styles.css";
import { Link as ScrollLink } from "react-scroll";

function MenuComponent({ currentSection, handleOnClick }) {
  return (
    <nav>
      <menu>
        <ul
          className={`menuHeader ${
            currentSection !== "presentacion" ? "menuActive" : "menuDesactive"
          }`}
        >
          <ScrollLink
            to="presentationComponentArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("presentation")}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="AboutMeArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("presentation")}
          >
            Sobre mi
          </ScrollLink>

          <ScrollLink
            to="ProjectArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("presentation")}
          >
            Portfolio
          </ScrollLink>

          <ScrollLink
            to="ContactArticle"
            smooth={true}
            duration={300}
            onClick={() => handleOnClick("presentation")}
          >
            Contacto
          </ScrollLink>
        </ul>
      </menu>
    </nav>
  );
}

export default MenuComponent;
