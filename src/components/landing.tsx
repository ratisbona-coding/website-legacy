import * as React from "react";
import styled from "@emotion/styled";
import { Container } from "./container";
import { Image } from "./image";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { breakpointMobile, breakpointTablet } from "../constants";

const Jumbotron = styled.div`
  padding-top: 24rem;
  width: 100%;
  margin: auto;

  @media screen and (max-width: ${breakpointMobile}) {
    padding-top: 12rem;
  }
`;

const Text = styled.p`
  padding-top: 20rem;
  margin: auto;
  width: 75%;
  color: white;

  @media screen and (max-width: ${breakpointMobile}) {
    padding-top: 5rem;
  }
`;

export const Landing = () => (
  <Container>
    <Row>
      <Column grow={1}>
        <Jumbotron>
          <Image label="Logo" src="images/logo.png" />
        </Jumbotron>
      </Column>

      <Column grow={1}>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Column>
    </Row>
  </Container>
);
