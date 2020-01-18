import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { crtFlickerColor1, crtFlickerColor2 } from "../../constants";

const move = keyframes`
  0% {
    background-position: center -50vh;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 0;
  }

  70%, 100% {
    background-position: center 50vh;
    opacity: 0;
  }
`;

const Gradient = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    ${crtFlickerColor2} 49.5%,
    ${crtFlickerColor1} 50%,
    ${crtFlickerColor2} 50.5%,
    rgba(0, 0, 0, 0) 100%
  );
  animation: ${move} 4s infinite linear;
`;

export const Flicker = () => <Gradient />;
