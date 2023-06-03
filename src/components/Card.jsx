export default function Card(props) {
  return (
    <div className="card">
      <p>Nombre: {props.nombre}</p>
      <p>Color: {props.color}</p>
    </div>
  );
}
