import * as React from "react";
import { Page } from "../components/page";
import { Navbar } from "../components/navbar";
import { Anchors } from "../anchors";


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

    <div style={{ height: "50vh" }} />
  </Page>
);
