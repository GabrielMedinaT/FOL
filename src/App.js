import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import PrimerosAuxilios from "./pages/PrimerosAuxilios";
import Quemaduras from "./pages/Quemaduras";
import Heridas from "./pages/Heridas";
import Fracturas from "./pages/Fracturas";
import Reanimacion from "./pages/Reanimacion";

function App() {
  const [render, setRender] = useState("primeros");

  console.log(render);
  return (
    <div className="App">
      <NavBar render={render} setRender={setRender} />

      {render === "primeros" && (
        <PrimerosAuxilios render={render} setRender={setRender} />
      )}
      {render === "quemaduras" && <Quemaduras />}
      {render === "heridas" && <Heridas />}
      {render === "fracturas" && <Fracturas />}
      {render === "reanimacion" && < Reanimacion/>}
    </div>
  );
}

export default App;
