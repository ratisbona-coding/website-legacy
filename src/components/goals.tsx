import * as React from "react";
import { Image } from "./image";
import { Button } from "./button";
import { eventHeight, imageWidth } from "../constants";
import styled from "@emotion/styled";

const GoalsContainer = styled.div`
  max-width: 70%;
  margin: auto;
`;

const EventList = styled.div`
  padding: 1rem 0;
`;

const Event = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto;
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EventTextContainer = styled.div`
  padding: 0;
`;

const P = styled.p`
  padding: 0;
`;

const ImageContainer = styled.div`
  max-width: ${imageWidth};
`;

const Footer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EventTitle = styled.h2`
  margin: 0;
`;

export const Goals = () => (
  <GoalsContainer>
    <h1>Events:</h1>
    <EventList>
      <Event>
        <ImageContainer>
          <Image
            label="Hackaburg School logo"
            src="images/hb-school.svg"
            height={eventHeight}
            width={imageWidth}
          />
        </ImageContainer>
        <EventContent>
          <EventTitle>Hackaburg School</EventTitle>
          <EventTextContainer>
            <P>
              Informatik ist nicht das beliebteste Schulfach, das wissen wir.
              Deshalb führen wir mit dem Mini "Hackaburg School" Hackathon
              interessierte Schüler spielerisch und hands-on in die Welt der
              praktischen IT ein.
            </P>
            <P>
              Unser Ziel ist es Jugendliche sowie bereits Studierende an den
              Bereich der Informationstechnologien mit Spaß heranzuführen bzw.
              das Wissen zu erweitern.
            </P>
            <P>
              Es sollen auch die Ängst/Vorurteile gegenüber des Programmierens
              genommen werden, dies geschieht z.B durch unsere Mentoren (aus dem
              Verein und unseren Partnerfirmen). Diese stehen bei Fragen aller
              Art zur Seite, sodass ein Lern/Programmier-Erfolg ohne Frustration
              für die Schüler erfolgt und spielerisch das Interesse am
              Programmieren geweckt wird.
            </P>
          </EventTextContainer>
        </EventContent>
      </Event>
      <Event>
        <ImageContainer>
          <Image
            label="Hackaburg logo"
            src="images/hackaburg.svg"
            height={eventHeight}
            width={imageWidth}
          />
        </ImageContainer>
        <EventContent>
          <EventTitle>Hackaburg</EventTitle>
          <EventTextContainer>
            <P>
              Wir lieben Hackathons und versuchen deshalb, mindestens einmal im
              Jahr unseren überregional bekannten Hackathon “Hackaburg”
              durchzuführen.
            </P>
            <P>
              Wir versuchen jedes Jahr die Hackaburg noch ein Stückchen besser
              zu machen, und so den Studierenden eine optimale Möglichkeit zu
              geben ihr Wissen und Können zu erweitern - denn mit Spaß lernt man
              am besten.
            </P>
            <P>
              Die Hackaburg selbst soll auch neue Teams mit Personen aus
              verschiedensten Herkünften und Stärken zusammenführen, hierbei
              freut es uns besonders wenn sich Freundschaften oder Kooperationen
              in dieser Atmosphäre bilden.
            </P>
            <P>
              <Button
                to="https://hackaburg.de"
                label="Zur Hackaburg Website!"
              />
            </P>
          </EventTextContainer>
        </EventContent>
      </Event>
      <Event>
        <ImageContainer>
          <Image
            label="Stammtisch logo"
            src="images/hb-stammtisch.svg"
            height={eventHeight}
            width={imageWidth}
          />
        </ImageContainer>
        <EventContent>
          <EventTitle>Stammtisch</EventTitle>
          <EventTextContainer>
            <P>
              Kellerkind war gestern: Einmal im Monat treffen wir uns zum
              Hackaburg Stammtisch, bei dem hochkarätige Speaker über die
              neuesten Entwicklungen und Technologien informieren. Alle sind
              willkommen, egal ob technik-affin oder Laie.
            </P>
            <P>
              <Button
                to="https://stammtisch.hackaburg.de"
                label="Zur Stammtisch Website!"
              />
            </P>
          </EventTextContainer>
        </EventContent>
      </Event>
    </EventList>
    <Footer>
      <P>Du willst mehr wissen? Schau dir doch hier unsere Satzung an!</P>
      <P>
        <Button to="#" label="Link zur Satzung" />
      </P>
    </Footer>
  </GoalsContainer>
);
