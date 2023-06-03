// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
      <Formulario saveUsuario={saveUsuario} />
      {Object.keys(usuario).length === 0 ? undefined : (
        <Card nombre={usuario.nombre} color={usuario.color} />
      )}
    </>
  );
}

export default App;
