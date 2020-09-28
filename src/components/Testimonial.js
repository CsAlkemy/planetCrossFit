import React from "react";
import "./style.scss";
import TestiOne from './Testimonial/TestiOne';
import TestiTwo from './Testimonial/TestiTwo';
import TestiThree from './Testimonial/TrstiThree';



function Testimonial() {
  return (
    <section className="hero is-large primary">
      <div className="hero-body py-7 MarginBottom">
        <div className="container">
          <h1 className="title is-2 has-text-white mt-5 has-text-centered">
            TESTIMONIOS
          </h1>
          <p className='title is-5 has-text-white has-text-weight-light  has-text-centered mb-5'>OPINIONES DE NUESTROS CROSSFITERS</p>
          <div className="columns">
            <div className="column is-mobile">
                <TestiOne />
            </div>
            <div className="column is-mobile">
                <TestiTwo />
            </div>
            <div className="column is-mobile">
                <TestiThree />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
