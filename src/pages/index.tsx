import * as React from "react";
import { Page } from "../components/page";
import { Navbar } from "../components/navbar";
import { Anchors } from "../anchors";
import { Goals } from "../components/goals";

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
      ]}
    />
    <div style={{ height: "50vh" }} />
    <Goals />
    <div style={{ height: "50vh" }} />
  </Page>
);
