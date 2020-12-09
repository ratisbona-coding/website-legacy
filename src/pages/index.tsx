import * as React from "react";
import { Page } from "../components/page";
import { Navbar } from "../components/navbar";
import { Anchors } from "../anchors";

import { EventGraph } from "../components/new-graph";

export default () => (
  <Page>
    <Navbar
      items={[
        {
          label: "About",
          marker: Anchors.About,
        },
      ]}
    />

    <div style={{ height: "50vh" }} />
    <EventGraph />
    <div style={{ height: "50vh" }} />
  </Page>
);
