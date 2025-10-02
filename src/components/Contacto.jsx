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
  <button type="submit">Enviar</button>
      </form>

      {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>¡Correo enviado correctamente!</p>}
      {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>Ocurrió un error al enviar el correo.</p>}

      <div style={{ marginTop: "2rem" }}>
        <h2 className="contacto-ubicacion-titulo">Ubicación</h2>
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.041881493232!2d-58.38155958477023!3d-34.603684980459494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac77df7f0b5%3A0x7a32e7c0f!2sObelisco%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1634505599999!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
</div>

    </div>
  );
}

export default Contacto;

