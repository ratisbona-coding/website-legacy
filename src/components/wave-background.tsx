import styled from "@emotion/styled";
import * as React from "react";

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

interface IWaveBackgroundProps {
  backgroundColor: string;
  foregroundColor: string;
  waveStartRatio?: number;
  waveWidthRatio?: number;
}

export const WaveBackground = ({
  backgroundColor,
  foregroundColor,
  waveStartRatio = 0.5,
  waveWidthRatio = 0.1,
}: IWaveBackgroundProps) => {
  const width = 200;
  const height = 200;
  const centerX = width * waveStartRatio;
  const centerY = height / 2;
  const waveSize = width * waveWidthRatio;

  return (
    <SVG viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <rect width="100%" height="100%" fill={backgroundColor} />
      <path
        d={`
        M ${centerX},0 C ${centerX + waveSize},${centerY} ${centerX -
          waveSize},${centerY} ${centerX},${height}
        L ${centerX},${height} ${width},${height}
        L ${width},${height} ${width},0
      `}
        fill={foregroundColor}
      />
    </SVG>
  );
};
