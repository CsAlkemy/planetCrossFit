import React from "react";

import Layout from "../components/layout";
import Tab from "../components/Tabs";

const SchedulePage = () => {
  return (
    <Layout>
      <section className="hero is-light is-medium">
        <div className="hero-body primary">
          <Tab />
        </div>
      </section>
    </Layout>
  );
};

export default SchedulePage;
