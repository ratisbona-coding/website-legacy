import styled from "@emotion/styled";
import * as React from "react";
import { eventDotSize, eventTimelineSize } from "../constants";
import { EventDot } from "./event-dot";

const EventTimelineContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  left: calc(${eventDotSize} / 2 - ${eventTimelineSize} / 2);
  top: 0;
  bottom: 0;

  border-left: 2px solid currentColor;
  height: 95%;
`;

const ContentContainer = styled.div`
  position: relative;
`;

const InitialEvent = styled.div`
  padding-bottom: 5rem;
`;

interface IEventTimelineProps {
  children: React.ReactNode;
  color: string;
}

export const EventTimeline = ({ children, color }: IEventTimelineProps) => (
  <EventTimelineContainer style={{ color }}>
    <Line />

    <ContentContainer>
      <InitialEvent>
        <EventDot isSpecial />
      </InitialEvent>

      {children}
    </ContentContainer>
  </EventTimelineContainer>
);
