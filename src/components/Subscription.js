import React from "react";
import { Button } from "../globalStyles";

import "./style.scss";
import {
  FooterSubscription,
  FooterSubHeading,
  Form,
  FormCheckBox,
  FormInput,
} from "./Footer/Footer.elements";

const Subs = (props) => (
  <FooterSubscription>
    <FooterSubHeading>
      ¿QUIERES PROBAR UN DÍA TOTALMENTE GRATIS?
    </FooterSubHeading>
    <Form>
      <FormCheckBox className="checkbox field">
        <input type="checkbox" className='is-checkradio' required />
        &nbsp; Acepto la{" "}
        <a href="/policy" target='_blank' className="linkText">
          {" "}
          Política de privacidad
        </a>
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
);

export default Subs;
