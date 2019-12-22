import styled from "@emotion/styled";
import * as React from "react";
import { Brand } from "../components/brand";
import { Page } from "../components/page";
import { WaveBackground } from "../components/wave-background";
import { accentColor, darkColor } from "../constants";

const Jumbotron = styled.div`
  position: relative;
  height: 90vh;
`;

const JumbotronBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Description = styled.div`
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const BrandContainer = styled.div`
  font-size: 3rem;
  color: ${accentColor};
  margin-bottom: 1rem;
`;

export default () => (
  <Page>
    <Jumbotron>
      <JumbotronBackground>
        <WaveBackground
          backgroundColor={darkColor}
          foregroundColor={accentColor}
          waveStartRatio={0.7}
          waveWidthRatio={0.1}
        />
      </JumbotronBackground>

      <Description>
        <BrandContainer>
          <Brand />
        </BrandContainer>
        Lorem ipsum dolor sit amet
      </Description>
    </Jumbotron>
  </Page>
);
