import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import PrimerosAuxilios from "./pages/PrimerosAuxilios";
import Quemaduras from "./pages/Quemaduras";
import Heridas from "./pages/Heridas";
import Fracturas from "./pages/Fracturas";

function App() {
  const [render, setRender] = useState("inicio");

  console.log(render);
  return (
    <div className="App">
      <NavBar render={render} setRender={setRender} />

      {render === "inicio" && <h1>Inicio</h1>}
      {render === "primeros" && <PrimerosAuxilios />}
      {render === "quemaduras" && <Quemaduras />}
      {render === "heridas" && <Heridas />}
      {render === "fracturas" && <Fracturas />}
    </div>
  );
}

export default App;
