import React, { useState } from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitMail = () => {
    emailjs.send(
      "service_znlpdrq",
      "template_lt8m9yq",
      {
        reply_to: formData.email,
        from_name: formData.name,
        to_name: "Borja",
        message: formData.message,
      },
      "roG3yC4mwgJKOOJBe"
    );

    toast.success("Email enviado correctamente");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSubmitMail();
    // Seteamos a null el formData
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section id="formComponent">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Introduce tu nombre"
          required
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Introduce tu correo"
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Introduce tu mensaje"
          required
          rows={10}
        ></textarea>

        <button type="submit" className="button page-link sendButton">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactFormComponent;
