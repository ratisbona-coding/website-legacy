import styled from "@emotion/styled";
import React from "react";
import { crtStripeColor1, crtStripeColor2 } from "../../constants";

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    ${crtStripeColor1} 25%,
    ${crtStripeColor2} 25%,
    ${crtStripeColor2} 50%,
    ${crtStripeColor1} 50%,
    ${crtStripeColor1} 75%,
    ${crtStripeColor2} 75%,
    ${crtStripeColor2} 100%
  );
  background-size: 4px 4px;
`;

export const Stripes = () => <Gradient />;
