import styled from "@emotion/styled";
import React from "react";
import { accentColor, crtTextColor, darkColor } from "../constants";
import { Flicker } from "./crt/flicker";
import { Stripes } from "./crt/stripes";

const Container = styled.div`
  position: relative;
  background: radial-gradient(${darkColor} 20%, black);
  color: white;
  font-family: Menlo;
  font-size: 14px;

  color: ${crtTextColor};
  text-shadow: 0px 0px 3px ${accentColor};
`;

const FullSizeContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  pointer-events: none;
`;

interface ICRTProps {
  children: React.ReactNode;
  flicker?: boolean;
}

export const CRT = ({ children, flicker = false }: ICRTProps) => (
  <Container>
    {flicker ? (
      <FullSizeContainer>
        <Flicker />
      </FullSizeContainer>
    ) : null}

    {children}

    <FullSizeContainer>
      <Stripes />
    </FullSizeContainer>
  </Container>
);
