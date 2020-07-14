import * as React from "react";
import styled from "@emotion/styled";
import { accentColorLight, highlightColor } from "../constants";

const Button = styled.button`
  background-color: ${accentColorLight};
  max-width: fit-content;

  border: none;
  border-radius: 5px;
  font-size: inherit;

  &:hover {
    background-color: ${highlightColor};
    text-decoration: underline;
  }
`;

const ButtonText = styled.p`
  padding: 0.5rem;
  margin: 0;
  color: #fff;

  font-size: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

interface ILinkButtonProps {
  to: string;
  label: string;
}

export const LinkButton = ({ to, label }: ILinkButtonProps) => (
  <Button onClick={() => (window.location.href = to)}>
    <ButtonText>{label}</ButtonText>
  </Button>
);
