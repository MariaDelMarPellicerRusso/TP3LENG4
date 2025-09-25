import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar-fixed">
      <Link to="/" className="navbar-link">
        <FaHome /> Inicio
      </Link>
      <Link to="/contacto" className="navbar-link">
        <FaEnvelope /> Contacto
      </Link>
    </nav>
  );
}

export default NavBar;

