import * as React from "react";
import { Page } from "../components/page";
import { Navbar } from "../components/navbar";
import { Anchors } from "../anchors";
import { Landing } from "../components/landing";

export default () => (
  <Page>
    <Navbar
      items={[
        {
          label: "About",
          marker: Anchors.About,
        },
        {
          label: "Goals",
          marker: Anchors.Goals,
        },
        {
          label: "Kontakt",
          marker: Anchors.Contact,
        },
      ]}
    />

    <Landing />

    <div style={{ height: "50vh" }} />

    <div style={{ height: "50vh" }} />
  </Page>
);
