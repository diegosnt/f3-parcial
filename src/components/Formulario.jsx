import { useState } from "react";

export default function Formulario(props) {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.charAt(0) === " " || color.length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
      props.saveUsuario(nombre, color);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        id="nombre"
        value={nombre}
        placeholder="Ingresa tu nombre"
        onChange={onChangeNombre}
      />

      <input
        type="text"
        id="color"
        value={color}
        placeholder="Ingresa tu color favorito (formato HEX)"
        onChange={onChangeColor}
      />
      <button className="button">Enviar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
