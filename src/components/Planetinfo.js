import React from "react";
import "./style.scss";
import Bike from "../images/stationary-bike.svg"

function Planetinfo() {
  return (
    <section className="hero is-large InfoHero">
      <div className="hero-body py-6">
        <div className="container">
          <div className="Points">
                <h1 className="title customText has-text-white has-text-centered">
                PLANET CROSSFIT, tu Box de CrossFit en Valencia
                </h1>
                <p className="title is-4 has-text-white has-text-centered">
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

                <p className="title is-4 has-text-white has-text-centered mt-5">
                ¿POR QUÉ HACER CROSSFIT EN PLANET?
                </p>
                <ol className="CustomMargin">
                <li className="title is-6 has-text-white has-text-weight-light">
                    Monitores cualificados con título oficial CrossFit.
                </li>
                <li className="title is-6 has-text-white has-text-weight-light">
                    Ejercicios adaptados a tu nivel.
                </li>
                </ol>
          </div>
          <div className='columns is-desktop mt-6'>
            <div className='column is-full-mobile'>
                <figure className="image is-96x96 SvgColor">
                    <img className='SvgColor' alt='bike' src={Bike}></img>
                </figure>
                <h1 className="has-text-white">Hello</h1>
            </div>
            <div className='column is-full-mobile'>Hello</div>
            <div className='column is-full-mobile'>Hello</div>
            <div className='column is-full-mobile'>Hello</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planetinfo;
