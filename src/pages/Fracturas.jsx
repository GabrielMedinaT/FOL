import React from "react";
import "./Fracturas.css";

const Fracturas = () => {
  return (
    <div className="container">
      <h2 className="frac">Fracturas Óseas</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1Iv3LaTDIA0?si=d3t_uvN38kQcOI1l"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <p>
        Una fractura es la pérdida de continuidad normal de un hueso. Puede ser
        causada por diversos factores como traumatismos, estrés o enfermedades
        óseas.
      </p>
      <h3>Tipos de Fracturas</h3>
      <ul>
        <li>Fractura cerrada: El hueso se rompe pero no perfora la piel.</li>
        <li>Fractura abierta: El hueso se rompe y atraviesa la piel.</li>
        <li>
          Fractura completa: El hueso se rompe en dos o más partes separadas.
        </li>
        <li>
          Fractura incompleta: El hueso se agrieta pero no se rompe por
          completo.
        </li>
      </ul>
      <h3>Tratamiento y Recuperación</h3>
      <p>
        El tratamiento depende del tipo y la ubicación de la fractura. Puede
        incluir inmovilización con yeso, férulas o cirugía en casos graves. La
        recuperación varía según la gravedad y la salud del paciente.
      </p>
    </div>
  );
};

export default Fracturas;
