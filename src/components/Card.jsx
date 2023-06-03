export default function Card(props) {
  return (
    <div className="card">
      <p>Hola {props.nombre}!</p>
      <p>Sabemos que tu color favorito es:</p> 
      <span className="color"> {props.color}</span>
    </div>
  );
}
