import * as React from "react";
import { Link } from "./link";
import styled from "@emotion/styled";
import { accentColorLight } from "../constants";

const ButtonContainer = styled.div`
  padding: 2rem;
  background-color: ${accentColorLight};
  max-width: fit-content;

  border-radius: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

interface IButtonProps {
  to: string;
  label: string;
  color?: string;
}

export const Button = ({ to, label, color }: IButtonProps) => {
  return (
    <Link to={to} label={label} underline={false}>
      <ButtonContainer>
        <ButtonText>{label}</ButtonText>
      </ButtonContainer>
    </Link>
  );
};
