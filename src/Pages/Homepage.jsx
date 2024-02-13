import React, { useEffect, useState } from "react";
import PresentationComponent from "../components/PresentationComponent/PresentationComponent";
import { Element } from "react-scroll";
import AboutMeComponent from "../components/AboutMeComponent/AboutMeComponent";
import ProjectComponent from "../components/ProjectComponent/ProjectComponent";
import ContactComponent from "../components/ContactComponent/ContactComponent";
import MenuComponent from "../components/MenuComponent/MenuComponent";
import HamburguerMenuComponent from "../components/HamburguerMenuComponent/HamburguerMenuComponent";

function Homepage() {
  const [currentSection, setCurrentSection] = useState(
    "presentationComponentArticle"
  );
  const [isSticky, setIsSticky] = useState(false);
  const [visitedSections, setVisitedSections] = useState({});
  const currentWidth = window.innerWidth;

  const handleOnClick = (_section) => {
    setCurrentSection(_section);
    setVisitedSections((prevVisitedSections) => ({
      ...prevVisitedSections,
      [_section]: true,
    }));
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 100;
    setIsSticky(scrollPosition > threshold);

    const sectionOffsets = {
      presentationComponentArticle: document.getElementById(
        "presentationComponentArticle"
      ).offsetTop,
      AboutMeArticle: document.getElementById("AboutMeArticle").offsetTop,
      ProjectArticle: document.getElementById("ProjectArticle").offsetTop,
      ContactArticle: document.getElementById("ContactArticle").offsetTop,
    };

    let foundSection = false;

    // Determinar la sección visible en función de la posición de desplazamiento
    Object.entries(sectionOffsets).forEach(([section, offset]) => {
      if (
        scrollPosition >= offset &&
        scrollPosition < offset + window.innerHeight
      ) {
        setCurrentSection(section);
        foundSection = true;
      }
    });

    // Actualizar el estado de las secciones visitadas al hacer scroll hacia abajo
    Object.entries(sectionOffsets).forEach(([section, offset]) => {
      if (
        scrollPosition >= offset &&
        scrollPosition < offset + window.innerHeight &&
        !visitedSections[section]
      ) {
        setVisitedSections((prevVisitedSections) => ({
          ...prevVisitedSections,
          [section]: true,
        }));
      }
    });
  };

  useEffect(() => {
    // Agregar el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <BackgroundComponent /> */}
      <Element
        name="presentationComponentArticle"
        id="presentationComponentArticle"
      >
        <section className="displaySection">
          <PresentationComponent handleOnClick={handleOnClick} />
        </section>
      </Element>
      {currentWidth > 800 ? (
        <MenuComponent
          currentSection={currentSection}
          handleOnClick={handleOnClick}
        />
      ) : (
        <HamburguerMenuComponent
          currentSection={currentSection}
          handleOnClick={handleOnClick}
        />
      )}

      <Element name="AboutMeArticle" id="AboutMeArticle">
        <section className="displaySection">
          <AboutMeComponent visited={visitedSections["AboutMeArticle"]} />
        </section>
      </Element>

      <Element name="ProjectArticle" id="ProjectArticle">
        <section className="displaySection">
          <ProjectComponent visited={visitedSections["ProjectArticle"]} />
        </section>
      </Element>

      <Element name="ContactArticle" id="ContactArticle">
        <section className="displaySection">
          <ContactComponent visited={visitedSections["ContactArticle"]} />
        </section>
      </Element>
    </>
  );
}

export default Homepage;
