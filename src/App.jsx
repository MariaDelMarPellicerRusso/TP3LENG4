import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Servicios from "./components/servicios.jsx";
import FileUploader from "./components/FileUploader";
import Contacto from "./components/Contacto"; 
import './App.css';

function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sube tu imagen</h1>
      <FileUploader />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/TP3LENG4/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


