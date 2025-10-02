export default function ServicioCard({ titulo, descripcion, precio, imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} className="card-img" />
      <div className="card-body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p className="precio">${precio.toLocaleString("es-AR")}</p>
      </div>
    </div>
  );
}
