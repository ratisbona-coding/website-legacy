import * as React from "react";
import styled from "@emotion/styled";
import { Container } from "./container";
import { Image } from "./image";

const Jumbotron = styled.div`
  padding-top: 14rem;
  width: 100%;
  margin: 0 auto;
`;

export const Landing = () => (
  <Container>
    <Jumbotron>
      <Image label="Logo" src="images/logo.svg" />
    </Jumbotron>
  </Container>
);
