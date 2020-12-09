import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import styled from "@emotion/styled";
import * as React from "react";

const Container = styled.div`
  padding: 20vh 0;
  width: fit-content;
  margin: 0 auto;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: auto;
`;

const hackaburgSpace = 10;
const hackaburgSchoolSpace = 5;
const hashcodeSpace = 5;
const colorHashcode = "#ff6384";
const colorHackaburg = "#1d74f5";
const colorHackaburgSchool = "#82bd53";
const colorStammtisch = "#ff9f40";

const template = templateExtend(TemplateName.Metro, {
  branch: {
    lineWidth: 5,
    label: {
      display: false,
    },
  },
  commit: {
    dot: {
      size: 7.5,
    },
    message: {
      font: "inherit",
      displayHash: false,
      displayAuthor: false,
    },
  },
});

const order = ["hashcode", "hb-stammtisch", "master", "hb-school"];

const compareBranchesOrder = (a: string, b: string) => {
  return order.indexOf(a) - order.indexOf(b);
};

export const EventGraph = () => {
  return (
    <Container>
      <GraphContainer>
        <Gitgraph
          options={{
            orientation: "vertical-reverse",
            compareBranchesOrder: compareBranchesOrder,
            template: template,
            svgClasses: [""],
          }}
        >
          {(gitgraph) => {
            // Simulate git commands with Gitgraph API.
            const master = gitgraph.branch({
              name: "master",

              style: {
                color: colorHackaburg,
              },
              commitDefaultOptions: {
                style: {
                  message: {
                    color: colorHackaburg,
                  },
                  dot: {
                    color: colorHackaburg,
                  },
                },
              },
            });
            master.commit("Hackaburg 2016");
            master.commit("Hackaburg 2017");
            master.commit("Hackaburg 2018");

            const hashcode = gitgraph.branch({
              name: "hashcode",
              style: {
                color: colorHashcode,
              },
              commitDefaultOptions: {
                style: {
                  message: {
                    color: colorHashcode,
                  },
                  dot: {
                    color: colorHashcode,
                  },
                },
              },
            });
            hashcode.commit("Hashcode 2019");

            const hackaburgSchool = master.branch({
              name: "hb-school",
              style: {
                color: colorHackaburgSchool,
              },
              commitDefaultOptions: {
                style: {
                  message: {
                    color: colorHackaburgSchool,
                  },
                  dot: {
                    color: colorHackaburgSchool,
                  },
                },
              },
            });
            hackaburgSchool.commit("Hackaburg School 2019");

            master.commit("Hackaburg 2019");

            const stammtisch = master.branch({
              name: "hb-stammtisch",
              style: {
                color: colorStammtisch,
              },
              commitDefaultOptions: {
                style: {
                  message: {
                    color: colorStammtisch,
                  },
                  dot: {
                    color: colorStammtisch,
                  },
                },
              },
            });
            stammtisch.commit("Stammtisch");

            hashcode.commit("Hashcode 2020");
            hackaburgSchool.commit("Hackaburg School 2020");

            master.commit("Hackaburg 2021");
          }}
        </Gitgraph>
      </GraphContainer>
    </Container>
  );
};
