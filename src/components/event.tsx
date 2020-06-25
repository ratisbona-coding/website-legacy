import * as React from "react";
import styled from "@emotion/styled";
import { Image } from "./image";
import { LinkButton } from "./linkbutton";
import {
  eventHeight,
  goalImageWidth,
  breakpointTablet,
  breakpointMobile,
} from "../constants";

interface IEventProps {
  name: string;
  imageLink?: string;
  buttonLink?: string;
  buttonText?: string;
  reverse?: boolean;
  children?: ReactNode;
}

const DefaultEventContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 1rem 0;

  @media (max-width: ${breakpointTablet}) {
    flex-direction: column;
  }
`;

const ReverseEventContainer = styled(DefaultEventContainer)`
  flex-direction: row-reverse;
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media not all and (max-width: ${breakpointMobile}) {
    padding-left: 1rem;
  }
`;

const EventTextContainer = styled.div`
  padding: 0;
`;

const ImageContainer = styled.div`
  max-width: ${goalImageWidth};
`;

const EventTitle = styled.h2`
  margin: 0;
`;

export const Event = ({
  name,
  imageLink,
  buttonLink,
  buttonText,
  reverse,
  children,
}: IEventProps) => {
  let EventContainer = reverse ? ReverseEventContainer : DefaultEventContainer;

  return (
    <EventContainer>
      <ImageContainer>
        {imageLink && (
          <Image
            label="Hackaburg logo"
            src={imageLink}
            height={eventHeight}
            width={goalImageWidth}
          />
        )}
      </ImageContainer>
      <EventContent>
        <EventTitle>{name}</EventTitle>
        <EventTextContainer>
          {children}
          {buttonLink && buttonText && (
            <LinkButton to={buttonLink} label={buttonText} />
          )}
        </EventTextContainer>
      </EventContent>
    </EventContainer>
  );
};
