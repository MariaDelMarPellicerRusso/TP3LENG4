import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Completa todos los campos");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Ingresa un correo válido");
      return;
    }

    emailjs.send(
      "service_zfp766k",
      "template_xc8w33j",
      formData,
      "sgekDpnNSfwLcIszP"
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      },
      (err) => {
        console.error("FAILED...", err);
        setStatus("error");
      }
    );
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} style={{ padding: "0.5rem", fontSize: "1rem" }} />
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} style={{ padding: "0.5rem", fontSize: "1rem" }} />
        <textarea name="message" placeholder="Escribe tu mensaje..." value={formData.message} onChange={handleChange} style={{ padding: "0.5rem", fontSize: "1rem", minHeight: "120px" }} />
        <button type="submit" style={{ padding: "0.7rem", fontSize: "1rem", backgroundColor: "#4B0082", color: "white", border: "none", cursor: "pointer" }}>Enviar</button>
      </form>

      {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>¡Correo enviado correctamente!</p>}
      {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>Ocurrió un error al enviar el correo.</p>}
    </div>
  );
}

export default Contacto;

