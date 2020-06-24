import styled from "@emotion/styled";
import * as React from "react";
import { eventDotSize } from "../constants";

const Dot = styled.div`
  background: currentColor;
  width: ${eventDotSize};
  height: ${eventDotSize};
  border-radius: ${eventDotSize};
`;

const SpecialDot = styled(Dot)`
  background: white;
  border: 2px solid currentColor;
`;

interface IEventDotProps {
  isSpecial?: boolean;
}

export const EventDot = ({ isSpecial = false }: IEventDotProps) =>
  isSpecial ? <SpecialDot /> : <Dot />;
