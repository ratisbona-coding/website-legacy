import styled from "@emotion/styled";
import * as React from "react";
import { EventDot } from "./event-dot";

const EventItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const ContentContainer = styled.div`
  padding-left: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  white-space: nowrap;
`;

const ChildrenContainer = styled.div`
  padding: 0.5rem 0;
  color: white;
`;

interface IEventItemProps {
  children?: React.ReactNode;
  title: string;
}

export const EventItem = ({ children, title }: IEventItemProps) => (
  <EventItemContainer>
    <EventDot />
    <ContentContainer>
      <Title>{title}</Title>
      {children && <ChildrenContainer>{children}</ChildrenContainer>}
    </ContentContainer>
  </EventItemContainer>
);
