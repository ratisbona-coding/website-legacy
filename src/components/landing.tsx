import * as React from "react";
import styled from "@emotion/styled";
import { Container } from "./container";
import { Image } from "./image";

const ImgDiv = styled.div`
  padding-top: 14rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const Landing = () => {
  return (
    <Container>
      <ImgDiv>
        <Image label="Logo" src="images/logo.svg" />
      </ImgDiv>
    </Container>
  );
};
