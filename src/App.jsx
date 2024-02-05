import "./App.css";
import { Element } from "react-scroll";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ProjectComponent from "./components/ProjectComponent/ProjectComponent";
import PresentationComponent from "./components/PresentationComponent/PresentationComponent";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import BackgroundComponent from "./components/BackgroundComponent/BackgroundComponent";
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent";

function App() {
  return (
    <div className="app">
      {/* <BackgroundComponent /> */}
      <PresentationComponent />

      <Element name="AboutMeArticle" id="AboutMeComponent">
        <section className="displaySection">
          <AboutMeComponent />
        </section>
      </Element>

      <Element name="ProjectArticle" id="ProjectComponent">
        <section className="displaySection">
          <ProjectComponent />
        </section>
      </Element>

      <Element name="ContactArticle" id="ContactComponent">
        <section className="displaySection">
          <ContactComponent />
        </section>
      </Element>
    </div>
  );
}

export default App;
