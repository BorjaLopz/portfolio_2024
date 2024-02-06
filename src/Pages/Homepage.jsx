import React, { useState } from "react";
import PresentationComponent from "../components/PresentationComponent/PresentationComponent";
import { Element } from "react-scroll";
import AboutMeComponent from "../components/AboutMeComponent/AboutMeComponent";
import ProjectComponent from "../components/ProjectComponent/ProjectComponent";
import ContactComponent from "../components/ContactComponent/ContactComponent";
import MenuComponent from "../components/MenuComponent/MenuComponent";

function Homepage() {
  const [currentSection, setCurrentSection] = useState(null);

  const handleOnClick = (_section) => {
    console.log("_section:", _section);
    setCurrentSection(_section);
  };
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
