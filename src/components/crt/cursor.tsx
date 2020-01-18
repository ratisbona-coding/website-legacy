import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { accentColor } from "../../constants";

const vanish = keyframes`
  0%, 25%, 60%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`;

const Block = styled.span`
  display: inline-block;
  vertical-align: bottom;
  background-color: currentColor;
  height: 1rem;
  width: 0.5rem;
  margin-left: 3px;
  animation: ${vanish} 2s infinite cubic-bezier(1, 0, 0, 1);
  box-shadow: 0px 0px 3px ${accentColor};
`;

export const Cursor = () => <Block />;
