import styled from "@emotion/styled";
import * as React from "react";
import { useIncrementedID } from "../hooks/use-incremented-id";

const Figure = styled.figure`
  margin: 0;
`;

const Caption = styled.figcaption`
  display: none;
`;

interface IAsciiArtProps {
  label: string;
  text: string;
}

export const AsciiArt = ({ label, text }: IAsciiArtProps) => {
  const id = useIncrementedID();
  const captionLabelID = `ascii-art-label-${id}`;

  return (
    <Figure role="img" aria-labelled-by={captionLabelID}>
      <pre aria-hidden="true">{text}</pre>
      <Caption id={captionLabelID}>{label}</Caption>
    </Figure>
  );
};
