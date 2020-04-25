import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile } from "../constants";

const BackgroundDiv = styled.div`
  background-image: #040b1a;
  background-color: #040b1a;
  color: white;

  @media screen and (max-width: ${breakpointMobile}) {
    background-size: 535px 535px;
  }
`;

interface IBackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: IBackgroundProps) => {
  return <BackgroundDiv>{children}</BackgroundDiv>;
};
