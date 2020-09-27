import React from "react";

import Layout from "../components/layout";
import Hero from "../components/HeroSection";
import Info from "../components/Planetinfo";
import Section from "../components/SectionOne";
import Testimonial from "../components/Testimonial";
import Map from "../components/Map";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Info />
      <Section />
      <Testimonial />
      <Map />
    </Layout>
  );
};

export default IndexPage;
