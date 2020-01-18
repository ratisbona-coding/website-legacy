import styled from "@emotion/styled";
import * as React from "react";
import { asciiArtLogo } from "../constants";
import { AsciiArt } from "./ascii-art";
import { CRT } from "./crt";
import { Cursor } from "./crt/cursor";

const Container = styled.div`
  padding: 20vh 3rem;
`;

const Text = styled.div`
  margin-top: 1rem;
  width: 400px;
`;

export const LandingCRT = () => (
  <CRT flicker={false}>
    <Container>
      <AsciiArt label="ratisbona coding e.V. ASCII art" text={asciiArtLogo} />

      <Text>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit amet.
        <Cursor />
      </Text>
    </Container>
  </CRT>
);
