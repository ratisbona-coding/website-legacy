import styled from "@emotion/styled";
import * as React from "react";

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Path = styled.path`
  fill: transparent;
  stroke: currentColor;
`;

interface IVerticalBezierCurveProps {
  width: number;
  height: number;
  ratio: number;
  strokeWidth: number;
  color: string;
}

export const VerticalBezierCurve = ({
  width,
  height,
  ratio,
  strokeWidth,
}: IVerticalBezierCurveProps) => {
  const centerY1 = height / ratio;
  const centerY2 = height - height / ratio;

  const isPointingLeft = width < 0;
  const normalizedWidth = Math.abs(width);

  const offsetX = strokeWidth / 2;
  const left = offsetX;
  const right = normalizedWidth - offsetX;
  const startX = isPointingLeft ? right : left;
  const endX = isPointingLeft ? left : right;

  const pathPoints = `M${startX},0 C${startX},${centerY1} ${endX},${centerY2} ${endX},${height}`;

  return (
    <SVG viewBox={`0 0 ${normalizedWidth} ${height}`}>
      <Path strokeWidth={strokeWidth} d={pathPoints} />
    </SVG>
  );
};
