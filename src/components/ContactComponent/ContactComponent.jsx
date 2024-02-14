import React from "react";
import "./styles.css";
import FooterComponent from "../FooterComponent/FooterComponent";
import ContactFormComponent from "../ContactFormComponent/ContactFormComponent";

function ContactComponent({ visited }) {
  return (
    <article className="contactArticle">
      <section className="contactSectionChild title">
        <h2 className={`titleStyle ${visited ? "active" : ""}`}>Contacto</h2>
        <div className={`underlineContainer ${visited ? "active" : ""}`}></div>
      </section>
      <div className="triangleSection"></div>
      <h4>
        ¿Tienes alguna duda o quieres trabajar conmigo? <br />
        ¡Escribeme!
      </h4>
      <ContactFormComponent />
      <FooterComponent />
    </article>
  );
}

export default ContactComponent;
