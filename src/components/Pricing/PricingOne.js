import React from "react";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { FaBicycle} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
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
  PricingCardFeature,
} from "./Pricing.elements";

function PricingOne() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>PLANES DE PAGO</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaBicycle />
                </PricingCardIcon>
                <PricingCardPlan>CROSSFIT</PricingCardPlan>
                <p className="subtitle has-text-white has-text-centered"> 2 Clases Semanales</p>
                <PricingCardCost>€ 50</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>2 clases a la semana</PricingCardFeature>
                  <PricingCardFeature>
                    El día de la semana que quieras
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>CROSSFIT</PricingCardPlan>
                <p className="subtitle has-text-white has-text-centered"> 3 Clases Semanales</p>
                <PricingCardCost>€ 65</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>3 clases a la semana</PricingCardFeature>
                  <PricingCardFeature>
                    El día de la semana que quieras
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>CROSSFIT</PricingCardPlan>
                <p className="subtitle has-text-white has-text-centered"> 3 Clases Semanales</p>
                <PricingCardCost>€ 79</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Todas las clases que quieras</PricingCardFeature>
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
                <p className="subtitle has-text-white has-text-centered"> Entrada libre al Box (todos los días)</p>
                <PricingCardCost>€ 50</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Entrada libre al box</PricingCardFeature>
                  <PricingCardFeature>El día de la semana que quieras</PricingCardFeature>
                  <PricingCardFeature>Sin acceso a las clases</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default PricingOne;
