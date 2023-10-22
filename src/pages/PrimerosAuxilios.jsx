import React, { useState } from "react";
import PAS from "./PAS";
import "./PrimerosAuxilios.css";

const PrimerosAuxilios = ({ render, setRender }) => {
  const [ver, setVer] = useState(false);
  const changeRender = (value) => {
    setRender(value);
  };

  return (
    <div className="container">
      <h1>Primeros Auxilios</h1>
      <h2 className="cambio" onClick={() => setVer(!ver)}>
        Metodo PAS
      </h2>
      <div className={`transition-container ${!ver && "hidden"}`}>
        {ver ? <PAS /> : null}
      </div>
      <div className={`transition-container ${ver && "hidden"}`}>
        <p>
          Los primeros auxilios son medidas de emergencia que se aplican a una
          persona antes de recibir atención médica profesional. Es importante
          conocer los conceptos básicos de primeros auxilios para poder ayudar
          en situaciones de emergencia.
        </p>
        <h2>Qué hacer en caso de...</h2>
        <ul>
          <li onClick={() => changeRender("heridas")}>Heridas y cortes</li>
          <li onClick={() => changeRender("quemadura")}>Quemaduras</li>
          <li onClick={() => changeRender("fracturas")}>Fracturas</li>
          <li>...</li>
        </ul>
        <h2>Consejos generales</h2>
        <ul>
          <li>Mantén la calma y evalúa la situación.</li>
          <li>Llama al servicio de emergencias si es necesario.</li>
          <li>...</li>
        </ul>
        <h2>Recursos adicionales</h2>
        <p>
          Para obtener más información sobre primeros auxilios, puedes visitar
          el sitio web de SUMMA 112 o en{" "}
          <a
            target="_blank"
            href="https://www.comunidad.madrid/hospital/summa112/ciudadanos/debe-hacer-emergencia#:~:text=Alertar%3A%20alerte%20a%20los%20Servicios,profesionales%20que%20atender%C3%A1n%20su%20llamada.">
            Este enlace
          </a>{" "}
          .
        </p>
      </div>
    </div>
  );
};

export default PrimerosAuxilios;
