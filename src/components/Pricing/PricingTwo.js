import React from "react";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { CgGym} from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import {
    PricingSectionTwo,
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
      <PricingSectionTwo>
        <PricingWrapper>
          <PricingHeading className='has-text-black'>BONOS</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <CgGym />
                </PricingCardIcon>
                <PricingCardPlan>CROSSFIT</PricingCardPlan>
                <p className="subtitle has-text-white has-text-centered"> Bono 5 clases</p>
                <PricingCardCost>€ 45</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Bono de 5 clases</PricingCardFeature>
                  <PricingCardFeature>
                    Ideal sino tienes claro tu horario y disponibilidad
                  </PricingCardFeature>
                  <PricingCardFeature>
                     El día de la semana que quieras
                  </PricingCardFeature>
                  <PricingCardFeature>
                     Puedes consumirlo durante 3 meses
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
                <p className="subtitle has-text-white has-text-centered"> Bono 10 Clases</p>
                <PricingCardCost>€ 70</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Bono de 10 clases</PricingCardFeature>
                  <PricingCardFeature>
                    Ideal sino tienes claro tu horario y disponibilidad
                  </PricingCardFeature>
                  <PricingCardFeature>
                     El día de la semana que quieras
                  </PricingCardFeature>
                  <PricingCardFeature>
                     Puedes consumirlo durante 3 meses
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
                <p className="subtitle has-text-white has-text-centered"> Estudiantes (ilimitado)</p>
                <PricingCardCost>€ 45</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Precio especial para estudiantes</PricingCardFeature>
                  <PricingCardFeature>Estudiantes universitarios con comprobante hasta 25 años</PricingCardFeature>
                  <PricingCardFeature>El día de la semana que quieras</PricingCardFeature>
                  <PricingCardFeature>Clases ilimitadas</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>OPEN BOX</PricingCardPlan>
                <p className="subtitle has-text-white has-text-centered"> Familiar ilimitado</p>
                <PricingCardCost>€ 120</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Ideal si vienes con un familiar (o más)</PricingCardFeature>
                  <PricingCardFeature>El día de la semana que quieras</PricingCardFeature>
                  <PricingCardFeature>Clases ilimitadas</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSectionTwo>
    </IconContext.Provider>
  );
}
export default PricingOne;
