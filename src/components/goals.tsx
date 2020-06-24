import * as React from "react";
import { Image } from "./image";
import { EventTitle } from "./eventtitle";

import { defaultEventHeight } from "../constants";

import styled from "@emotion/styled";

const GlobalDiv = styled.div`
  max-width: 70%;
  margin: auto;
`;

const EventList = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

/*
const Event = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 1rem;
  grid-auto-rows: 1fr;
`;
*/

const Event = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const EventContent = styled.div`
  height: ${defaultEventHeight};
`;

const EventText = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Point = styled.li`
  padding: 5px 0;
`;

const Footer = styled.div``;

/*
Fake News sind gefährlich. Wir haben uns deshalb insbesondere der
Förderung von Forschung, Entwicklung und Aufklärung im Bereich der
informationstechnologien gewidmet. Du musst nicht Bill Gates sein, um
Computer richtig zu verstehen: Deshalb darf die Allgemeinbildung und
Förderung der Bevölkerung im Umgang mit neuen Technologien nicht zu kurz
kommen.

Local Heroes statt Silicon Valley: Wir fördern universitäre Leistungen im
Bereich der MINT-Fächer und unterstützen durch unser Netzwerk an lokalen
Firmen auch gerne bei der Stellensuche.

Auch die Volksbildung, egal ob bei jung oder alt, im Bereich der neuen
Technologien z.b KI möchten wir fördern, da diese In Zukunft große
Auswirkungen auf unser alltägliches Leben haben wird.

Ebenfalls soll der Verein selbst bzw. vom Verein ausgeführte
Veranstaltungen als Austauschplattform für Diskussionen, Vorträge, oder
auch neuen Ideen im Bereich der Informatik/Informationstechnologien dienen.
*/

export const Goals = () => (
  <GlobalDiv>
    <Title>Events:</Title>
    <EventList>
      <Event>
        <Image
          label="Hackaburg School"
          src="images/hb-school.svg"
          height={defaultEventHeight}
        />
        <EventContent>
          <EventTitle name="Hackaburg School" />
          <EventText>
            <Point>
              Informatik ist nicht das beliebteste Schulfach, das wissen wir.
              Deshalb führen wir mit dem Mini “Hackaburg School” Hackathon
              interessierte Schüler spielerisch und hands-on in die Welt der
              praktischen IT ein.
            </Point>
            <Point>
              Unser Ziel ist es Jugendliche sowie bereits Studierende an den
              Bereich der Informationstechnologien mit Spaß heranzuführen bzw.
              das Wissen zu erweitern.
            </Point>
            <Point>
              Es sollen auch die Ängst/Vorurteile gegenüber des Programmierens
              genommen werden, dies geschieht z.B durch unsere Mentoren (aus dem
              Verein und unseren Partnerfirmen). Diese stehen bei Fragen aller
              Art zur Seite, sodass ein Lern/Programmier-Erfolg ohne Frustration
              für die Schüler erfolgt und spielerisch das Interesse am
              Programmieren geweckt wird.
            </Point>
          </EventText>
        </EventContent>
      </Event>
      <Event>
        <EventContent>
          <EventTitle name="Hackaburg" link="https://hackaburg.de" />
          <EventText>
            <Point>
              Wir lieben Hackathons und versuchen deshalb, mindestens einmal im
              Jahr unseren überregional bekannten Hackathon “Hackaburg”
              durchzuführen.
            </Point>
            <Point>
              Wir versuchen jedes Jahr die Hackaburg noch ein Stückchen besser
              zu machen, und so den Studierenden eine optimale Möglichkeit zu
              geben ihr Wissen und Können zu erweitern - denn mit Spaß lernt man
              am besten.
            </Point>
            <Point>
              Die Hackaburg selbst soll auch neue Teams mit Personen aus
              verschiedensten Herkünften und Stärken zusammenführen, hierbei
              freut es uns besonders wenn sich Freundschaften oder Kooperationen
              in dieser Atmosphäre bilden.
            </Point>
          </EventText>
        </EventContent>
        <Image
          label="Hackaburg"
          src="images/hackaburg.svg"
          height={defaultEventHeight}
        />
      </Event>
      <Event>
        <Image
          label="Stammtisch"
          src="images/hb-stammtisch.svg"
          height={defaultEventHeight}
        />
        <EventContent>
          <EventTitle
            name="Stammtisch"
            link="https://stammtisch.hackaburg.de"
          />
          <EventText>
            <Point>
              Kellerkind war gestern: Einmal im Monat treffen wir uns zum
              Hackaburg Stammtisch, bei dem hochkarätige Speaker über die
              neuesten Entwicklungen und Technologien informieren. Alle sind
              willkommen, egal ob technik-affin oder Laie.
            </Point>
          </EventText>
        </EventContent>
      </Event>
    </EventList>
    <Footer>
      Du willst mehr wissen? Schau dir doch hier unsere Satzung an!
    </Footer>
  </GlobalDiv>
);
