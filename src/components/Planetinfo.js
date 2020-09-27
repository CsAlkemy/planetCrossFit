import React from "react";
import "./style.scss";
import Bike from "../images/stationary-bike.svg";
import Salad from "../images/salad.svg";
import Watch from "../images/watch.svg";
import Wist from "../images/waist.svg";


function Planetinfo() {
  return (
    <section className="hero is-large InfoHero">
      <div className="hero-body py-6 MarginBottom">
        <div className="container">
          <div className="Points mb-6 mt-6">
            <h1 className="title customText has-text-white has-text-centered">
              PLANET CROSSFIT, tu Box de CrossFit<br/> en Valencia
            </h1>
            <p className="title is-4 has-text-white has-text-centered MarginTop">
              ¿POR QUÉ PRACTICAR CROSSFIT?
            </p>
            <ol className="CustomMargin mb-5 ">
              <li className="title is-6 has-text-white has-text-weight-light">
                Mejoras tu resistencia cardiovascular y respiratoria.
              </li>
              <li className="title is-6 has-text-white has-text-weight-light">
                Aumentas tu resistencia muscular.
              </li>
              <li className="title is-6 has-text-white has-text-weight-light">
                Consigues una mejor fuerza, flexibilidad, velocidad, agilidad y
                coordinación.
              </li>
              <li className="title is-6 has-text-white has-text-weight-light">
                El tiempo de cada circuito es muy corto, lo cual te ayudara a
                ahorrar tiempo.
              </li>
              <li className="title is-6 has-text-white has-text-weight-light">
                Es divertido y te ayuda a eliminar el estrés.
              </li>
            </ol>

            <p className="title is-4 has-text-white has-text-centered MarginTop">
              ¿POR QUÉ HACER CROSSFIT EN PLANET?
            </p>
            <ol className="CustomMargin">
              <li className="title is-6 has-text-white has-text-weight-light">
                Monitores cualificados con título oficial CrossFit.
              </li>
              <li className="title is-6 has-text-white has-text-weight-light MarginBottom">
                Ejercicios adaptados a tu nivel.
              </li>
            </ol>
          </div>
          <div className="columns mt-6 mb-6">
            <div className="column is-mobile">
              <figure className="image is-96x96 SvgColor">
                <img className="SvgColor" alt="bike" src={Bike}></img>
              </figure>
              <h1 className="title is-6 mt-2 has-text-centered has-text-white">
                EQUIPAMIENTO MODERNO
              </h1>
              <p className="title is-6 mt-2 has-text-centered has-text-white has-text-weight-light">
                Disponemos de todas las máquinas como las Assault Bike, Carros
                de arrastre y mucho más.
              </p>
            </div>
            <div className="column is-mobile">
              <figure className="image is-96x96 SvgColor">
                <img className="SvgColor" alt="bike" src={Salad}></img>
              </figure>
              <h1 className="title is-6 mt-3 has-text-centered has-text-white">
                DIETA SANA Y NUTRICIÓN
              </h1>
              <p className="title is-6 mt-3 has-text-centered has-text-white has-text-weight-light">
                Nuestros monitores tienen titulación para orientarte sobre como
                seguir una dieta sana y una buena alimentación
              </p>
            </div>
            <div className="column is-mobile">
              <figure className="image is-96x96 SvgColor">
                <img className="SvgColor" alt="bike" src={Watch}></img>
              </figure>
              <h1 className="title is-6 mt-3 has-text-centered has-text-white">
                ENTRENAMIENTO PROFESIONAL
              </h1>
              <p className="title is-6 mt-3 has-text-centered has-text-white has-text-weight-light">
                Realizarás todas las rutinas de crossfit con el seguimiento de
                un monitor titulado en crossfit.
              </p>
            </div>
            <div className="column is-mobile">
              <figure className="image is-96x96 SvgColor">
                <img className="SvgColor" alt="bike" src={Wist}></img>
              </figure>
              <h1 className="title is-6 mt-3 has-text-centered has-text-white">
                ÉXITO GARANTIZADO
              </h1>
              <p className="title is-6 mt-3 has-text-centered has-text-white has-text-weight-light">
                Cuéntanos tus objetivos y verás como acabas consiguiéndolos con
                nosotros. No importa el nivel que tengas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planetinfo;
