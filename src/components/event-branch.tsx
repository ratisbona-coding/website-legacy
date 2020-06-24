import styled from "@emotion/styled";
import * as React from "react";
import { eventBranchCurveHeightPixels, eventDotSize } from "../constants";
import { EventDot } from "./event-dot";
import { EventTimeline } from "./event-timeline";
import { VerticalBezierCurve } from "./vertical-bezier-curve";

const EventBranchContainer = styled.div`
  position: absolute;
`;

const CurveContainer = styled.div`
  position: absolute;
`;

const OriginContainer = styled.div`
  position: absolute;
  top: -${eventDotSize};
`;

interface IEventBranchProps {
  children: React.ReactNode;
  offsetX: number;
  offsetY: number;
  color: string;
}

export const EventBranch = ({
  children,
  offsetX,
  offsetY,
  color,
}: IEventBranchProps) => {
  const referencePointX = offsetX > 0 ? offsetX : 0;
  const width = Math.abs(offsetX);
  const originPositionProperty = offsetX > 0 ? "left" : "right";

  return (
    <EventBranchContainer
      style={{
        left: offsetX,
        top: offsetY,
      }}
    >
      <EventTimeline color={color}>
        <CurveContainer
          style={{
            left: `calc(-${referencePointX}px + (${eventDotSize}) / 2)`,
            top: -eventBranchCurveHeightPixels,

            height: eventBranchCurveHeightPixels,
            width,
          }}
        >
          <VerticalBezierCurve
            color="red"
            width={offsetX}
            height={eventBranchCurveHeightPixels}
            ratio={1}
            strokeWidth={2}
          />

          <OriginContainer
            style={{
              [originPositionProperty]: `calc(-${eventDotSize} / 2)`,
            }}
          >
            <EventDot isSpecial />
          </OriginContainer>
        </CurveContainer>

        {children}
      </EventTimeline>
    </EventBranchContainer>
  );
};
