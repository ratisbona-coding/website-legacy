import styled from "@emotion/styled";
import * as React from "react";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 35%;
  flex-grow: 1;
`;

const FontContainer = styled.span`
  font-family: Monaco, Inconsolata, Consolas, monospace;
`;

const SecondSlashContainer = styled.span`
  position: relative;
  left: -20%;
`;

const Slashes = () => (
  <span>
    /<SecondSlashContainer>/</SecondSlashContainer>
  </span>
);

export const Brand = () => (
  <FontContainer>
    <OuterContainer>
      <Slashes />
      <RightContainer>
        <div>ratisbona</div>
        <div>coding e.V.</div>
      </RightContainer>
    </OuterContainer>
  </FontContainer>
);

export const BasicBrand = () => (
  <FontContainer>
    <Slashes />
  </FontContainer>
);
