import * as React from "react";
import { Image } from "./image";
import { Link } from "./link";
import { EventTitle } from "./eventtitle";
import styled from "@emotion/styled";

const GlobalDiv = styled.div`
  max-width: 70%;
  margin: auto;
`;

const GoalsText = styled.ul`
  padding: 0;
  list-style-type: none;
`;
const Goal = styled.li`
  padding: 5px;
`;

const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;
const EventContent = styled.div``;
const EventText = styled.p``;
const EventImage = styled.div``;

/*
Stichpunkte:

Deshalb ...

Fake News sind gefährlich. Wir haben uns deshalb insbesondere der Förderung von Forschung, Entwicklung und Aufklärung im Bereich der informationstechnologien gewidmet.
Du musst nicht Bill Gates sein, um Computer richtig zu verstehen: Deshalb darf die Allgemeinbildung und Förderung der Bevölkerung im Umgang mit neuen Technologien nicht zu kurz kommen.

Local Heroes statt Silicon Valley: Wir fördern universitäre Leistungen im Bereich der MINT-Fächer und unterstützen durch unser Netzwerk an lokalen Firmen auch gerne bei der Stellensuche.
*/

export const Goals = () => (
  <GlobalDiv>
    <Title>Events:</Title>
    <EventList>
      <Event>
        <EventImage>
          <Image label="Hackaburg" src="images/hackaburg.svg" />
        </EventImage>
        <EventContent>
          <EventTitle name="Hackaburg" link="https://hackaburg.de" />
          <EventText>
            Wir lieben Hackathons und versuchen deshalb, mindestens einmal im
            Jahr unseren überregional bekannten Hackathon “Hackaburg”
            durchzuführen.
          </EventText>
        </EventContent>
      </Event>
      <Event>
        <EventImage>
          <Image label="Hackaburg School" src="images/hb-school.svg" />
        </EventImage>
        <EventContent>
          <EventTitle name="Hackaburg School" />
          <EventText>
            Informatik ist nicht das beliebteste Schulfach, das wissen wir.
            Deshalb führen wir mit dem Mini “Hackaburg School” Hackathon
            interessierte Schüler spielerisch und hands-on in die Welt der
            praktischen IT ein.
          </EventText>
        </EventContent>
      </Event>
      <Event>
        <EventImage>
          <Image label="Stammtisch" src="images/hb-stammtisch.svg" />
        </EventImage>
        <EventContent>
          <EventTitle
            name="Stammtisch"
            link="https://stammtisch.hackaburg.de"
          />
          <EventText>
            Kellerkind war gestern: Einmal im Monat treffen wir uns zum
            Hackaburg Stammtisch, bei dem hochkarätige Speaker über die neuesten
            Entwicklungen und Technologien informieren. Alle sind willkommen,
            egal ob technik-affin oder Laie.
          </EventText>
        </EventContent>
      </Event>
    </EventList>
    <Title>Goals:</Title>
    <GoalsText>
      <Goal>
        Unser Ziel ist es Jugendliche sowie bereits Studierende an den Bereich
        der Informationstechnologien mit Spaß heranzuführen bzw. das Wissen zu
        erweitern.
      </Goal>
      <Goal>
        Es soll auch die Angst/Vorurteile gegenüber Programmieren genommen
        werden, dies geschieht z.B für Schüler durch einen erleichterten
        Einstieg bei der Hackaburg School. Hierbei stehen Mentoren bei Fragen
        aller Art zur Seite, sodass ein Lern/Programmier-Erfolg ohne Frustration
        für die Schüler erfolgt.
      </Goal>
      <Goal>
        Wir versuchen jedes Jahr die Hackaburg noch ein Stückchen besser zu
        machen, und so den Studenten eine optimale Möglichkeit zu geben ihr
        Wissen und Können zu erweitern-denn mit Spaß lernt man am besten.
      </Goal>
      <Goal>
        Die Hackaburg selbst soll auch neue Teams mit Personen aus
        verschiedensten Herkünften und Stärken zusammenführen, hierbei freut es
        uns besonders wenn sich Freundschaften oder Kooperationen in dieser
        Atmosphäre bilden.
      </Goal>
      <Goal>
        Ebenfalls soll der Verein selbst bzw. vom Verein ausgeführte
        Veranstaltungen als Austauschplattform für Diskussionen, Vorträge, oder
        auch neuen Ideen im Bereich der Informatik/Informationstechnologien
        dienen.
      </Goal>
      <Goal>
        Auch die Volksbildung, egal ob bei jung oder alt, im Bereich der neuen
        Technologien z.b KI möchten wir fördern, da diese In Zukunft große
        Auswirkungen auf unser alltägliches Leben haben wird.
      </Goal>
      <Goal>
        Die genauen Inhalte unserer Satzung sind{" "}
        <Link to="#" label="Satzung download">
          hier
        </Link>{" "}
        nachzulesen.
      </Goal>
    </GoalsText>
  </GlobalDiv>
);
