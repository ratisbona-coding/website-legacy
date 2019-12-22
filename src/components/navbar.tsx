import styled from "@emotion/styled";
import * as React from "react";
import { accentColor } from "../constants";
import { BasicBrand } from "./brand";
import { Link } from "./link";

const Menu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  list-style: none;
  margin: 0;
  padding: 0rem 1rem;
`;

interface IMenuItemProps {
  isActive?: boolean;
}

const MenuItem = styled.li<IMenuItemProps>`
  position: relative;
  display: inline-block;
  padding: 1rem 1.5rem;
  color: ${accentColor};

  &:before {
    display: block;
    content: " ";
    height: 6px;
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    top: 0rem;
  }

  ${({ isActive }) =>
    isActive
      ? `
      &:before {
        background-color: ${accentColor};
      }
    `
      : `
      &:hover &:before {
        background-color: white;
      }
    `}
`;

const BrandContainer = styled.div`
  color: white;
`;

export const Navbar = () => (
  <Menu>
    <MenuItem>
      <Link label="About" to="/">
        <BrandContainer>
          <BasicBrand />
        </BrandContainer>
      </Link>
    </MenuItem>
    <MenuItem isActive>
      <Link label="About" to="/" />
    </MenuItem>
    <MenuItem>
      <Link label="Events" to="events" />
    </MenuItem>
    <MenuItem>
      <Link label="Contact" to="contact" />
    </MenuItem>
    <MenuItem>
      <Link label="Imprint" to="imprint" />
    </MenuItem>
  </Menu>
);
