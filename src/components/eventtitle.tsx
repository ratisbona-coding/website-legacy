import * as React from "react";
import { Link } from "./link";
import styled from "@emotion/styled";

interface EventTitleProps {
  name: string;
  link?: string;
}

const EventName = styled.h2``;

export const EventTitle = ({ name, link }: EventTitleProps) => (
  <>
    {link ? (
      <Link to={link} label={name}>
        <EventName>{name}</EventName>
      </Link>
    ) : (
      <EventName>{name}</EventName>
    )}
  </>
);
