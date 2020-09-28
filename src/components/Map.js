import React from "react";
import './style.scss';

function Map() {
  return (
    <section className="hero primary is-large">
      <div className="hero-body py-6">
        <div className="container">
          <h1 className="title has-text-centered has-text-white">
            ¿DÓNDE SE ENCUENTRA EL BOX PLANET CROSSFIT?
          </h1>
          <h2 className="title is-6 has-text-weight-light has-text-centered  has-text-light mb-7">
            El box de Planet Crossfit se encuentra en Picanya, muy cerca de
            ciudades como Paiporta, Torrent y Valencia.
          </h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.4663910297413!2d-0.4285405146843321!3d39.43618939424488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f1bf800c37b%3A0x70a796cc09ca117b!2sPlanet%20CrossFit!5e0!3m2!1ses!2ses!4v1601266184418!5m2!1ses!2ses"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              title="Planet Cross Location"
              className='Iframe_Size'
            />
            ;
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
