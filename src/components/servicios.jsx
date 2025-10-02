import { servicios } from "../data/servicios";
import ServicioCard from "./servicioCard";

export default function Servicios() {
  return (
    <section className="servicios">
      <h1>Nuestros Servicios</h1>
      <div className="cards-container">
        {servicios.map((s) => (
          <ServicioCard
            key={s.id}
            titulo={s.titulo}
            descripcion={s.descripcion}
            precio={s.precio}
            imagen={s.imagen}
          />
        ))}
      </div>
    </section>
  );
}
