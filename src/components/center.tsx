import styled from "@emotion/styled";
import * as React from "react";

const Container = styled.div`
  position: absolute;
`;

interface ICenterProps {
  children: React.ReactNode;
}

export const Center = ({ children }: ICenterProps) => (
  <Container>{children}</Container>
);
