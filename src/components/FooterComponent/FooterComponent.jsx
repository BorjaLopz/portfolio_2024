import React from "react";
import "./styles.css";
import redes from "../../redes.json";
import { Link as ScrollLink } from "react-scroll";

function FooterComponent() {
  /* Obtenemos la fecha actual */
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();

  const handleClick = () => {
    alert("¡Gracias por visitarnos!");
  };

  return (
    <section className="footerRedes">
      <section className="redes">
        {redes.map((r) => {
          return (
            <a
              key={r?.id}
              href={`${r?.name === "Email" ? `mailto:${r?.url}` : `${r?.url}`}`}
              target="_blank"
              className="cubeLink"
            >
              <article key={r?.id}>
                <img src={`/Icons/${r?.icon}.svg`} alt={`${r?.icon} Icon`} />
              </article>
            </a>
          );
        })}
      </section>
      <p>
        Borja López Díaz <span>© {añoActual}</span>
      </p>
      <ScrollLink
        to="presentationComponentArticle"
        smooth={true}
        duration={300}
        onClick={handleClick}
        className="welcomeTop"
      >
        <img src="/Icons/ArrowUp.svg" alt="" />
      </ScrollLink>
    </section>
  );
}

export default FooterComponent;
