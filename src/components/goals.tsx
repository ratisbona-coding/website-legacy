import * as React from "react";
import { LinkButton } from "./linkbutton";
import styled from "@emotion/styled";
import { Event } from "./event";

const GoalsContainer = styled.div`
  max-width: 70%;
  margin: auto;
`;

const EventList = styled.div`
  padding: 1rem 0;
`;

const Paragraph = styled.p`
  padding: 0;
`;

const Footer = styled.div`
  padding: 0;
`;

export const Goals = () => (
  <GoalsContainer>
    <h1>Goals</h1>
    <EventList>
      <Event name="Hackaburg School" imageLink="images/hb-school.svg">
        <Paragraph>
          Informatik ist nicht das beliebteste Schulfach, das wissen wir.
          Deshalb führen wir mit dem Mini "Hackaburg School" Hackathon
          interessierte Schüler spielerisch und hands-on in die Welt der
          praktischen IT ein.
        </Paragraph>
        <Paragraph>
          Unser Ziel ist es Jugendliche sowie bereits Studierende an den Bereich
          der Informationstechnologien mit Spaß heranzuführen bzw. das Wissen zu
          erweitern.
        </Paragraph>
        <Paragraph>
          Es sollen auch die Ängst/Vorurteile gegenüber des Programmierens
          genommen werden, dies geschieht z.B durch unsere Mentoren (aus dem
          Verein und unseren Partnerfirmen). Diese stehen bei Fragen aller Art
          zur Seite, sodass ein Lern/Programmier-Erfolg ohne Frustration für die
          Schüler erfolgt und spielerisch das Interesse am Programmieren geweckt
          wird.
        </Paragraph>
      </Event>
      <Event
        name="Hackaburg"
        imageLink="images/hackaburg.svg"
        buttonLink="https://hackaburg.de"
        buttonText="Zur Hackaburg Website!"
        reverse={true}
      >
        <Paragraph>
          Wir lieben Hackathons und versuchen deshalb, mindestens einmal im Jahr
          unseren überregional bekannten Hackathon “Hackaburg” durchzuführen.
        </Paragraph>
        <Paragraph>
          Wir versuchen jedes Jahr die Hackaburg noch ein Stückchen besser zu
          machen, und so den Studierenden eine optimale Möglichkeit zu geben ihr
          Wissen und Können zu erweitern - denn mit Spaß lernt man am besten.
        </Paragraph>
        <Paragraph>
          Die Hackaburg selbst soll auch neue Teams mit Personen aus
          verschiedensten Herkünften und Stärken zusammenführen, hierbei freut
          es uns besonders wenn sich Freundschaften oder Kooperationen in dieser
          Atmosphäre bilden.
        </Paragraph>
      </Event>
      <Event
        name="Stammtisch"
        imageLink="images/hb-stammtisch.svg"
        buttonLink="https://stammtisch.hackaburg.de"
        buttonText="Zur Stammtisch Website!"
      >
        <Paragraph>
          Kellerkind war gestern: Einmal im Monat treffen wir uns zum Hackaburg
          Stammtisch, bei dem hochkarätige Speaker über die neuesten
          Entwicklungen und Technologien informieren. Alle sind willkommen, egal
          ob technik-affin oder Laie.
        </Paragraph>
      </Event>
    </EventList>
    <Footer>
      <Paragraph>
        Du willst mehr wissen? Schau dir doch hier unsere Satzung an!
      </Paragraph>
      <Paragraph>
        <LinkButton to="#" label="Link zur Satzung" />
      </Paragraph>
    </Footer>
  </GoalsContainer>
);
