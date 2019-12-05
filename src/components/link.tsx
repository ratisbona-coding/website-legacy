import styled from "@emotion/styled";
import * as React from "react";

const A = styled.a`
  color: inherit;
  text-decoration: none;

  &:active,
  &:visited {
    color: inherit;
  }
`;

interface ILinkProps {
  children?: React.ReactNode;
  label: string;
  target?: "_blank";
  to: string;
}

export const Link = ({ children, label, target, to }: ILinkProps) => (
  <A aria-label={label} href={to} target={target}>
    {children ?? label}
  </A>
);
