import "./App.css";
import Formulario from "./components/Formulario";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState({});

  const saveUsuario = (nombre, color) => {
    setUsuario({ nombre, color });
  };

  return (
    <>
      <h1>Elige un color</h1>
      <Formulario saveUsuario={saveUsuario} />
      {Object.keys(usuario).length === 0 ? undefined : (
        <Card nombre={usuario.nombre} color={usuario.color} />
      )}
    </>
  );
}

export default App;
