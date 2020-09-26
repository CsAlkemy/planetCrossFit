import React from "react";
import { Button } from "../../globalStyles";
import LevelOne from "../../images/crossfit-level.png";
import Logo from "../../images/logo-planet-crossfit.png";

import { FiMapPin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  Form,
  FormCheckBox,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import { Link } from "gatsby";

function Footer() {
  var gapiLink = "https://g.page/planetcrossfit?share";
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          ¿QUIERES PROBAR UN DÍA TOTALMENTE GRATIS?
        </FooterSubHeading>
        <Form>
          <FormCheckBox className="checkbox">
            <input type="checkbox" required />
            &nbsp; Acepto la <Link to="/policy" className='linkText'> Política de privacidad</Link>
          </FormCheckBox>
          <FormInput
            name="email"
            required
            type="email"
            placeholder="Tu correo electrónico:"
          />

          <Button fontBig>Apúntate gratis</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <figure className="image">
              <img src={Logo} alt="nivel logoo uno"></img>
            </figure>
            <figure className="image">
              <img src={LevelOne} alt="nivel certificado uno"></img>
            </figure>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems className="is-1"></FooterLinkItems>
          <div>
            <p className="mt-5 is-6 has-text-white is-mobile-full">
              Puedes ponerte en contacto con nuestro box de crossfit aquí:
            </p>
            <div className="footerAddress mt-2">
              <a
                className="has-text-white mt-1"
                href={gapiLink}
                rel="noreferrer"
                target="_blank"
              >
                <FiMapPin />
                &nbsp; Dirección:{" "}
                <span className="textLink">
                  {" "}
                  9 Carrer Barranc de Xiva, Picaña, Comunidad Valenciana
                </span>
              </a>
              <a
                className="has-text-white mt-1"
                href="https://wa.link/ge8jru"
                rel="noreferrer"
                target="_blank"
              >
                <FaWhatsapp />
                &nbsp; Sólo Whatsapp:{" "}
                <span className="textLink"> 644561296</span>
              </a>
              <a
                className="has-text-white mt-1"
                href="mailto:info@planetcrossfit.com"
                rel="noreferrer"
                target="_blank"
              >
                <FiMail />
                &nbsp; Email:{" "}
                <span className="textLink"> info@planetcrossfit.com</span>
              </a>
            </div>
          </div>
          <FooterLinkItems className="is-1"></FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights className='FooterPolicy'>
            <div className="FooterPolicy">
              <Link to='/' className="textLink"> Aviso legal</Link>
              <Link  to='/' className="textLink ml-2"> -Política de privacidad</Link>
              <Link to='/' className="textLink ml-2"> -Condiciones de contratación</Link>
            </div>
          </WebsiteRights>
          <WebsiteRights>© 2020, Planet Crossfit.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://www.facebook.com/planetcrossfitbox" target="_blank" className='textLink' aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/planet_crossfit/" target="_blank" className='textLink' aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/Planet_Crossfit" target="_blank" className='textLink' aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
