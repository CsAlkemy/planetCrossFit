import React from "react";
import "../style.scss";

import Alicia from "../../images/testim/testim-8.jpg";

function testiOne() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={Alicia} alt="Placeholder" className="is-rounded" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Alicia</p>
            <p className="subtitle is-6">@Torrent (Valencia)</p>
          </div>
        </div>
        <div className="content mb-3">
          ¡Buen box. Buen material y coaches inmejorables!
          <br />
        </div>
      </div>
    </div>
  );
}

export default testiOne;
