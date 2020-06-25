import * as React from "react";
import { Link } from "./link";
import styled from "@emotion/styled";
import { accentColorLight, highlightColor } from "../constants";

const ButtonContainer = styled.div`
  padding: 0.75rem;
  background-color: ${accentColorLight};
  max-width: fit-content;

  border-radius: 5px;

  &:hover {
    background-color: ${highlightColor};
    text-decoration: underline;
  }
`;

const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
`;

interface ILinkButtonProps {
  to: string;
  label: string;
}

export const LinkButton = ({ to, label }: ILinkButtonProps) => {
  return (
    <Link to={to} label={label} underline={false}>
      <ButtonContainer>
        <ButtonText>{label}</ButtonText>
      </ButtonContainer>
    </Link>
  );
};
