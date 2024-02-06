import React, { useEffect, useState } from "react";
import PresentationComponent from "../components/PresentationComponent/PresentationComponent";
import { Element } from "react-scroll";
import AboutMeComponent from "../components/AboutMeComponent/AboutMeComponent";
import ProjectComponent from "../components/ProjectComponent/ProjectComponent";
import ContactComponent from "../components/ContactComponent/ContactComponent";
import MenuComponent from "../components/MenuComponent/MenuComponent";

function Homepage() {
  const [currentSection, setCurrentSection] = useState(
    "presentationComponentArticle"
  );
  const [isSticky, setIsSticky] = useState(false);

  const handleOnClick = (_section) => {
    setCurrentSection(_section);
  };

  // Cambiamos la currentSection en funcion del scroll que haya en la pagina
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

    // Determinar la sección visible en función de la posición de desplazamiento
    if (
      scrollPosition >= sectionOffsets.presentationComponentArticle &&
      scrollPosition < sectionOffsets.AboutMeArticle
    ) {
      setCurrentSection("presentationComponentArticle");
    } else if (
      scrollPosition >= sectionOffsets.AboutMeArticle &&
      scrollPosition < sectionOffsets.ProjectArticle
    ) {
      setCurrentSection("AboutMe");
    } else if (
      scrollPosition >= sectionOffsets.ProjectArticle &&
      scrollPosition < sectionOffsets.ContactArticle
    ) {
      setCurrentSection("Project");
    } else if (scrollPosition >= sectionOffsets.ContactArticle) {
      setCurrentSection("Contact");
    }
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
      <MenuComponent
        currentSection={currentSection}
        handleOnClick={handleOnClick}
      />

      <Element name="AboutMeArticle" id="AboutMeArticle">
        <section className="displaySection">
          <AboutMeComponent
            active={currentSection === "AboutMe" ? "active" : ""}
          />
        </section>
      </Element>

      <Element name="ProjectArticle" id="ProjectArticle">
        <section className="displaySection">
          <ProjectComponent />
        </section>
      </Element>

      <Element name="ContactArticle" id="ContactArticle">
        <section className="displaySection">
          <ContactComponent />
        </section>
      </Element>
    </>
  );
}

export default Homepage;
