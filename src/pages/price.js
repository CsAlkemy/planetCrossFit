import React from "react";

import Layout from "../components/layout";
import PriceOne from "../components/Pricing/PricingOne";
import PriceTwo from "../components/Pricing/PricingTwo";
import PriceThree from "../components/Pricing/PricingThree";
import PriceFour from "../components/Pricing/PricingFour";







const PricePage = () => {
  return (
    <Layout>
      <PriceOne />
      <PriceTwo />
      <PriceThree />
      <PriceFour />
    </Layout>
  );
};

export default PricePage;
