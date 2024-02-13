import { useState } from "react";
import "./style.css";
import { Link as ScrollLink } from "react-scroll";

function HamburguerMenuComponent({ currentSection, handleOnClick }) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSectionClicked, setIsSectionClicked] = useState(false);

  const handleClickSection = (_section) => {
    setIsMenuClicked(false);
    handleOnClick(_section);
  };

  const burguerItem = isMenuClicked
    ? "burguerBar clicked"
    : "burguerBar unclicked";

  const menuSection =
    isMenuClicked && isSectionClicked
      ? "containerMenu menuSection active"
      : "containerMenu menuSection inactive";

  const updateMenu = () => {
    setIsSectionClicked(true);
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div id="containerBurguerMenu">
      <nav>
        <div className="burguerMenu" onClick={updateMenu}>
          <div className={burguerItem}></div>
          <div className={burguerItem}></div>
          <div className={burguerItem}></div>
        </div>

        <div  className={menuSection}>
          <ul>
            <ScrollLink
              to="presentationComponentArticle"
              smooth={true}
              duration={300}
              onClick={() => handleClickSection("presentationComponentArticle")}
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
              onClick={() => handleClickSection("AboutMeArticle")}
              className={`${
                currentSection === "AboutMeArticle" ? "linkActive" : ""
              }`}
            >
              Sobre mi
            </ScrollLink>

            <ScrollLink
              to="ProjectArticle"
              smooth={true}
              duration={300}
              onClick={() => handleClickSection("ProjectArticle")}
              className={`${
                currentSection === "ProjectArticle" ? "linkActive" : ""
              }`}
            >
              Portfolio
            </ScrollLink>

            <ScrollLink
              to="ContactArticle"
              smooth={true}
              duration={300}
              onClick={() => handleClickSection("ContactArticle")}
              className={`${
                currentSection === "ContactArticle" ? "linkActive" : ""
              }`}
            >
              Contacto
            </ScrollLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HamburguerMenuComponent;
