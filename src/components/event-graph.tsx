import styled from "@emotion/styled";
import * as React from "react";
import { EventBranch } from "./event-branch";
import { EventItem } from "./event-item";
import { EventTimeline } from "./event-timeline";
const Container = styled.div`
  padding: 20vh 0;
  width: fit-content;
  margin: 0 auto;
`;
const getSpace = (height: number) => <div style={{ height: `${height}rem` }} />;
const hackaburgSpace = 10;
const hackaburgSchoolSpace = 5;
const hashcodeSpace = 5;
const colorHashcode = "rgb(255, 99, 132)";
const colorHackaburg = "#1d74f5";
const colorHackaburgSchool = "#82bd53";
const colorStammtisch = "rgb(255, 159, 64)";
export const EventGraph = () => {
  return (
    <Container>
      <EventTimeline color={colorHackaburg}>
        <EventBranch offsetX={250} offsetY={320} color={colorHackaburgSchool}>
          <EventItem title="Hackaburg School 2018" />
          {getSpace(hackaburgSchoolSpace)}
          <EventItem title="Hackaburg School 2019" />
        </EventBranch>
        <EventBranch offsetX={-340} offsetY={140} color={colorHashcode}>
          <EventItem title="Hashcode 2017" />
          {getSpace(hashcodeSpace)}
          <EventItem title="Hashcode 2018" />
          {getSpace(hackaburgSpace)}
          <EventItem title="Hashcode 2019" />
        </EventBranch>
        <EventBranch offsetX={-150} offsetY={500} color={colorStammtisch}>
          <EventItem title="Stammtisch" />
        </EventBranch>
        <EventItem title="Hackaburg 2017" />
        {getSpace(hackaburgSpace)}
        <EventItem title="Hackaburg 2018" />
        {getSpace(hackaburgSpace)}
        <EventItem title="Hackaburg 2019" />
        {getSpace(hackaburgSpace)}
        <EventItem title="Hackaburg 2020" />
      </EventTimeline>
    </Container>
  );
};
