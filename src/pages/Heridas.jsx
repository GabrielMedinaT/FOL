import React from "react";
import "./Heridas.css";
import { useState } from "react";


const Heridas = () => {
    const [ver, setVer] = useState(false);
  return (
    <div className="container">
      <h1>PRIMEROS AUXILIOS: HERIDAS</h1>


      <h2>¿Qué son las heridas?</h2>
      <p>
        Una herida es toda pérdida de continuidad de la piel. Como consecuencia
        de la agresión de este tejido existe riesgo de infección y posibilidad
        de lesiones en órganos o tejidos adyacentes: músculos, nervios, etc.
      </p>
      <p>
        Ante una herida se recomienda la vacunación contra el tétanos si el
        accidentado no recuerda si está vacunado o si ha recibido menos de tres
        dosis o, si la última dosis recibida hace más de 10 años (heridas
        limpias) o más de 5 años en heridas contaminadas y/o punzantes.
      </p>

      <h2>Tipo de heridas</h2>
      <p>Según la profundidad:</p>
      <ul>
        <li>Arañazo o abrasión - piel</li>
        <li>Superficial - piel + grasa</li>
        <li>Profunda - músculo</li>
        <li>Penetrante - vísceras</li>
      </ul>
      <p>Según el objeto:</p>
      <ul>
        <li>Punzantes</li>
        <li>Incisas</li>
        <li>Contusas</li>
      </ul>

      <h2>Heridas punzantes</h2>
      <p>
        Son las producidas por objetos puntiagudos, como clavos, agujas,
        astillas de madera, herramientas manuales etc. que se introducen en los
        tejidos.
      </p>
      <h3>Primeros auxilios:</h3>
      <ul>
        <li>
          Lavar con una gasa, agua y jabón, desde el centro hasta unos 3cm. por
          fuera de la herida.
        </li>
        <li>
          Si es una zona en la que hay pelos conviene recortarlos o afeitarlos.
        </li>
        <li>
          Retirar cuerpos extraños si son accesibles y pueden extraerse con
          facilidad.
        </li>
        <li>Secar con una gasa.</li>
        <li>Aplicar antiséptico.</li>
        <li>Cubrir con gasa, esparadrapo o vendas.</li>
      </ul>
      <p>
        Estas recomendaciones son suficientes cuando la herida es pequeña y los
        bordes están próximos. Si la herida es grande o los bordes están
        separados, CONSULTAR con personal sanitario.
      </p>

      <h2>Heridas incisas</h2>
      <p>Son las causadas por cortes limpios.</p>
      <h3>Primeros auxilios:</h3>
      <ul>
        <li>Lavar con una gasa, agua y jabón.</li>
        <li>Aplicar antiséptico.</li>
        <li>Tapar con gasas y esparadrapo.</li>
        <li>Las curas deben hacerse cada dos días aproximadamente.</li>
      </ul>
      <p>
        Si la herida es larga y profunda, o si aparece dolor, supuración o los
        bordes están enrojecidos y calientes, CONSULTAR con personal sanitario.
      </p>

      <h2>Heridas contusas</h2>
      <p>
        Se producen por golpes que además de romper la piel, tienen hematomas
        (tejidos aplastados).
      </p>
      <h3>Primeros auxilios:</h3>
      <ul>
        <li>Cubrir la herida con gasas o compresas.</li>
        <li>
          Si hay hemorragia apretar sobre la herida para cohibirla, vigilando
          que no se ponga violácea por estar demasiado apretada.
        </li>
        <li>No pinchar los hematomas.</li>
        <li>No tocar la herida con los dedos.</li>
        <li>No aplicar antisépticos.</li>
        <li>Prevenir el shock: acostar al lesionado y abrigarlo.</li>
        <li>AVISAR a los servicios médicos.</li>
      </ul>

      <h2>Clínica de las heridas</h2>
      <ul>
        <li>Dolor por irritación de las terminaciones nerviosas</li>
        <li>
          Hemorragia. Se debe distinguir entre:
          <ul>
            <li>Capilar: en sábana, sangre roja</li>
            <li>Venosa: babeante, sangre oscura</li>
            <li>Arterial: pulsátil, sangre roja brillante</li>
          </ul>
        </li>
        <li>
          Separación de bordes al producirse la herida, es mayor o menor
          dependiendo de la longitud y de la profundidad.
        </li>
      </ul>

      <h2>Casos especiales de heridas</h2>
      <h3>Neumotórax abierto o herida perforante en el tórax</h3>
      <p>
        Es la presencia de aire en la cavidad plural, producida por la entrada
        de aire desde el exterior (herida torácica), y provoca un dolor intenso
        y dificultad respiratoria.
      </p>
      <h3>Primeros auxilios:</h3>
      <ul>
        <li>Taponamiento oclusivo parcial (un lado sin cerrar)</li>
        <li>Traslado urgente en posición semisentado.</li>
        <li>No extraer cuerpos extraños alojados (inmovilizarlos).</li>
        <li>Vigilar periódicamente las constantes vitales.</li>
        <li>No dar de beber a la victima.</li>
      </ul>

      <h3>Heridas perforantes de abdomen</h3>
      <p>Las complicaciones más frecuentes suelen ser:</p>
      <ul>
        <li>Hemorragia interna</li>
        <li>Perforación del tubo digestivo</li>
        <li>Salida de asas intestinales</li>
      </ul>
      <h3>Primeros auxilios:</h3>
      <ul>
        <li>Cubrirlas con un apósito estéril humedecido.</li>
        <li>
          Traslado urgente en posición decúbito supino con las piernas
          flexionadas.
        </li>
        <li>No extraer cuerpos extraños alojados.</li>
        <li>
          No reintroducir contenido intestinal (cubrirlo con apósito estéril
          húmedo).
        </li>
        <li>No dar nada de comer ni de beber.</li>
        <li>Vigilar con frecuencia las constantes vitales.</li>
      </ul>

      <h3>Amputaciones traumáticas</h3>
      <p>
        Son la pérdida de algún miembro, o parte de él, como consecuencia de un
        traumatismo. En estos casos suele actuar un acto reflejo de constricción
        de los vasos sanguíneos producido por la depresión, retrasando que la
        persona muera desangrada (aunque exista inevitable pérdida de sangre)
        aunque esto no es siempre así ; debe preverse el shock hipovolémico.
      </p>
      <h3>Primeros auxilios:</h3>
      <p>
        En la zona de amputación debe controlarse la hemorragia (torniquete si
        procede). La parte amputada se cubrirá con apósitos estériles. Se
        colocará dentro de una bolsa de plástico, que a su vez se colocará
        dentro de otra bolsa de plástico o recipiente con hielo en su interior.
        Se trasladará junto al lesionado a un centro especializado para su
        reimplantación.
      </p>

      <h3>Heridas oculares</h3>
      <p>
        Son las causas más comunes de ceguera que pueden evitarse; hay muchas
        irritaciones leves que se pueden tratar lavando los ojos con abundante
        agua, pero las heridas más graves requieren atención médica, prefiera
        exagerar la precaución
      </p>
      <h3>Primeros auxilios:</h3>
      <p>
        Tumbar al herido con la cabeza bien sujeta, permaneciendo inmóvil y con
        la mirada fija. Colocaremos tres o cuatro compresas de gasas sobre los
        dos ojos cerrados, las sujetamos con vendas sin comprimir y avisar a los
        servicios médicos.
      </p>
      <p>
        En el caso de que existiera algún cuerpo extraño en el ojo, si no está
        enclavado, lo primero que haremos será intentar sacar el cuerpo extraño.
        La primera medida sería intentar arrastrar el cuerpo extraño por medio
        de un chorro de agua. Si la irritación continúa debe ser examinado por
        un médico. Si el objeto ha penetrado en el ojo: llame a emergencia
        médica, cubra el ojo dañado sin comprimir.
      </p>
      <p>
        Ante quemaduras, cubrirlo sin comprimir y traslado urgente a un
        hospital.
      </p>
      <p>
        Si lo que tiene es una contusión, cubrir el ojo sin comprimir y
        trasladarlo a urgencias, teniendo en cuenta, si lo hacemos en vehículo
        particular, que el afectado debe de ir en el asiento de al lado del
        conductor sin apoyar la cabeza. Nunca en asientos traseros o con la
        cabeza apoyada.
      </p>

      <h2>Lo que NO se debe hacer</h2>
      <ul>
        <li>Usar alcohol.</li>
        <li>Usar algodón.</li>
        <li>Poner pomadas.</li>
        <li>Quitar el apósito de un tirón.</li>
        <li>Manipular la herida.</li>
        <li>Intentar retirar cuerpos extraños enclavados.</li>
      </ul>
    </div>
  );
};

export default Heridas;
