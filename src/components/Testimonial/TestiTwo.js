import React from "react";
import "../style.scss";

import Cristina from "../../images/testim/testim-9.jpg";

function testiTwo() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={Cristina} alt="Placeholder" className="is-rounded" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Cristina</p>
            <p className="subtitle is-6">@Picanya (Valencia)</p>
          </div>
        </div>
        <div className="content mb-3">
          Las instalaciones tienen todo lo necesario para realizar la practica
          del crossfit. Además los entrenadores te aconsejan en todo momento y
          te corrigen si ven que algo lo puedes hacer mejor.
          <br />
        </div>
      </div>
    </div>
  );
}

export default testiTwo;
