import React from "react";
import "../style.scss";

import Amparo from "../../images/testim/testim-4.jpg";

function testiOne() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={Amparo} alt="Placeholder" className="is-rounded" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Amparo</p>
            <p className="subtitle is-6">@Torrent (Valencia)</p>
          </div>
        </div>
        <div className="content mb-3">
          Los entrenadores saben adaptarse al nivel de cada persona cambiando
          los ejercicios según como estamos de forma.
          <br />
        </div>
      </div>
    </div>
  );
}

export default testiOne;
