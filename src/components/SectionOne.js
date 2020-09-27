import React from "react";
import "./style.scss";
import SectionPic from "../images/crossfit_para_todos.jpg";
import SectionPicTwo from "../images/desarolla.jpg";
import { IoIosArrowDropright } from "react-icons/io";

function SectionOne() {
  return (
    <section>
      <div className="columns">
        <div className="column primary is-mobile pr-0 pb-0">
          <h1 className="title is-2 has-text-right has-text-white has-text-centered-mobile ELCross">
            ¿EL CROSSFIT ES
            <br /> PARA TODOS?
          </h1>
          <p className="title is-6 has-text-right has-text-white has-text-centered-mobile has-text-weight-light setWeidth ml-2">
            Hay gente que cree que no puede practicar Crossfit, pero en Planet
            Crossfit nos adaptamos a todos los niveles de nuestros clientes.
            Solo te pedimos una cosa a cambio, que como mínimo des el máximo de
            ti. Pásate por nuestro box y te demostraremos que tú también puedes
            practicarlo.
          </p>
          <button className="button is-info is-rounded is-medium ml-5 mb-5 ">
            Prueba Gratis &nbsp;
            <IoIosArrowDropright />
          </button>
        </div>
        <div className="column primary is-mobile pl-0 pb-0">
          <figure className="image is-3by2">
            <img src={SectionPic} alt="hero of section one"></img>
          </figure>
        </div>
      </div>
      <div className="columns">
        <div className="column is-mobile  primary pr-0 pt-0 ">
          <figure className="image is-3by2">
            <img src={SectionPicTwo} alt="hero of section one"></img>
          </figure>
        </div>
        <div className="column is-mobile primary pl-0 ">
          <h1 className="title is-2 has-text-left has-text-centered-mobile has-text-white ELCross ml-5">
            DESARROLLA LAS 10
            <br /> CAPACIDADES FÍSICAS
            <br /> GENERALES
          </h1>
          <p className="title is-6 has-text-left has-text-centered-mobile has-text-white ml-5 has-text-weight-light setWeidth">
            La fórmula del CrossFit es ejecutar movimientos funcionales con
            variación constante y alta intensidad. Con ello mejorarás las 10
            capacidades físicas generales que son: fuerza, resistencia
            cardiovascular, resistencia muscular, flexibilidad, coordinación,
            precisión, agilidad, equilibrio, velocidad y potencia.
          </p>
          <button className="button is-info is-rounded is-medium ml-5 mb-5  ">
            Prueba Gratis &nbsp;
            <IoIosArrowDropright />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
