import React from "react";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { CgGym} from "react-icons/cg";
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

function PricingThree() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>DESCUENTOS</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <CgGym />
                </PricingCardIcon>
                <PricingCardPlan>FUERZAS DEL ESTADO</PricingCardPlan>
                <PricingCardCost>10%</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>Bomberos</PricingCardFeature>
                  <PricingCardFeature>
                  Policías
                  </PricingCardFeature>
                  <PricingCardFeature>
                     Guardias civiles
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Militares
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>PAGO TRIMESTRAL</PricingCardPlan>
                <PricingCardCost>5%</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>5% de descuento sobre cualquier tarifa elegida (excepto bonos de 5 y 10 clases)</PricingCardFeature>
                  <PricingCardFeature>
                     Matrícula incluida
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>PAGO SEMESTRE</PricingCardPlan>
                <PricingCardCost>10%</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>10% de descuento sobre cualquier tarifa elegida (excepto bonos de 5 y 10 clases)</PricingCardFeature>
                  <PricingCardFeature>Matrícula incluida</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>PAGO ANUAL</PricingCardPlan>
                <PricingCardCost>15%</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>15% de descuento sobre cualquier tarifa elegida (excepto los bonos de 5 y 10 clases)</PricingCardFeature>
                  <PricingCardFeature>Matrícula incluida</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default PricingThree;
