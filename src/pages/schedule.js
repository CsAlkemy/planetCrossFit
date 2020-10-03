import React from "react";

import Layout from "../components/layout";

const SchedulePage = () => {
  return (
    <Layout>
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container">
            <div className='center'>
              <button className="button is-link is-outlined ml-2">TODOS ALL CLASES</button>
              <button className="button is-link is-outlined ml-2">CROSSFIT</button>
              <button className="button is-link is-outlined ml-2">CROSSFIT HERO</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchedulePage;
