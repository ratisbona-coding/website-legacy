import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile } from "../constants";

const BackgroundDiv = styled.div`
  background-color: #040B0E;

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
