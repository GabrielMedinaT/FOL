import React from "react";
import "./Quemaduras.css";
const Quemaduras = () => {
  return (
    <div className="container">
      <h2>Quemaduras</h2>
      <div className="contImagen">
        <div className="imagen"></div>
      </div>

      <p>
        Las quemaduras son lesiones en la piel y tejidos subyacentes causadas
        por exposición a temperaturas extremadamente altas, sustancias químicas,
        electricidad o radiación. Es importante saber cómo proporcionar los
        primeros auxilios adecuados para tratar este tipo de lesiones.
      </p>
      <h3>Primeros Auxilios para Quemaduras:</h3>
      <ol>
        <li>
          <strong>Evaluar la gravedad:</strong> Determina si la quemadura es de
          primer, segundo o tercer grado. Las quemaduras de tercer grado
          requieren atención médica inmediata.
        </li>
        <li>
          <strong>Enfriar la quemadura:</strong> Si es una quemadura de primer
          grado o una quemadura de segundo grado pequeña, enfríala con agua fría
          durante al menos 10-20 minutos.
        </li>

        <li>
          <strong>Proteger la zona afectada:</strong> Cubre la quemadura con un
          paño limpio y no adhesivo o un apósito estéril.
        </li>
        <li>
          <strong>No uses hielo:</strong> Evita colocar hielo directamente sobre
          la quemadura, ya que puede empeorar la lesión.
        </li>
        <li>
          <strong>No revientes ampollas:</strong> Si hay ampollas, no las
          revientes. Esto aumenta el riesgo de infección.
        </li>
        <li>
          <strong>Consulta a un profesional de la salud:</strong> Si la
          quemadura es grave, de tercer grado o cubre una gran área del cuerpo,
          busca atención médica de inmediato.
        </li>
      </ol>
    </div>
  );
};

export default Quemaduras;
