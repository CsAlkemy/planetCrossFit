import React from "react";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature, PricingSectionTwo
} from "./Pricing.elements";

function PricingThree() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSectionTwo>
        <PricingWrapper>
          <PricingHeading className='has-text-black'>Clases sueltas</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>CROSSFIT</PricingCardPlan>
                <PricingCardCost>€ 10</PricingCardCost>
                <PricingCardLength>por día</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Ideal si estas de paso</PricingCardFeature>
                  <PricingCardFeature>El día de la semana que quieras</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>OPEN BOX</PricingCardPlan>
                <PricingCardCost>€ 6</PricingCardCost>
                <PricingCardLength>por día</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Ideal si estas de paso</PricingCardFeature>
                  <PricingCardFeature>El día de la semana que quieras</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSectionTwo>
    </IconContext.Provider>
  );
}
export default PricingThree;
