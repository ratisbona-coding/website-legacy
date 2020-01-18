import styled from "@emotion/styled";
import React from "react";

const colorStripe1 = "rgba(0, 10, 0, 0.1)";
const colorStripe2 = "rgba(0, 0, 0, 0.2)";

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    ${colorStripe1} 25%,
    ${colorStripe2} 25%,
    ${colorStripe2} 50%,
    ${colorStripe1} 50%,
    ${colorStripe1} 75%,
    ${colorStripe2} 75%,
    ${colorStripe2} 100%
  );
  background-size: 4px 4px;
`;

export const Stripes = () => <Gradient />;
