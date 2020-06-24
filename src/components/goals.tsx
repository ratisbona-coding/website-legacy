import * as React from "react";
import { Image } from "./image";
import { Button } from "./button";

import { defaultEventHeight, defaultImageWidth } from "../constants";

import styled from "@emotion/styled";

const GlobalDiv = styled.div`
  max-width: 70%;
  margin: auto;
`;

const EventList = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
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

const EventText = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Point = styled.li`
  padding: 5px 0;
`;

const ImageContainer = styled.div`
  max-width: fit-content;
`;

const Footer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EventTitle = styled.h2`
  margin: 0;
`;

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
    <h1>Events:</h1>
    <EventList>
      <Event>
        <ImageContainer>
          <Image
            label="Hackaburg School"
            src="images/hb-school.svg"
            height={defaultEventHeight}
            width={defaultImageWidth}
          />
        </ImageContainer>
        <EventContent>
          <EventTitle>Hackaburg School</EventTitle>
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
        <ImageContainer>
          <Image
            label="Hackaburg"
            src="images/hackaburg.svg"
            height={defaultEventHeight}
            width={defaultImageWidth}
          />
        </ImageContainer>
        <EventContent>
          <EventTitle>Hackaburg</EventTitle>
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
            <Point>
              <Button
                to="https://hackaburg.de"
                label="Zur Hackaburg Website!"
              />
            </Point>
          </EventText>
        </EventContent>
      </Event>
      <Event>
        <ImageContainer>
          <Image
            label="Stammtisch"
            src="images/hb-stammtisch.svg"
            height={defaultEventHeight}
            width={defaultImageWidth}
          />
        </ImageContainer>
        <EventContent>
          <EventTitle>Stammtisch</EventTitle>
          <EventText>
            <Point>
              Kellerkind war gestern: Einmal im Monat treffen wir uns zum
              Hackaburg Stammtisch, bei dem hochkarätige Speaker über die
              neuesten Entwicklungen und Technologien informieren. Alle sind
              willkommen, egal ob technik-affin oder Laie.
            </Point>
            <Point>
              <Button
                to="https://stammtisch.hackaburg.de"
                label="Zur Stammtisch Website!"
              />
            </Point>
          </EventText>
        </EventContent>
      </Event>
    </EventList>
    <Footer>
      <Point>
        Du willst mehr wissen? Schau dir doch hier unsere Satzung an!
      </Point>
      <Point>
        <Button to="#" label="Link zur Satzung" />
      </Point>
    </Footer>
  </GlobalDiv>
);
