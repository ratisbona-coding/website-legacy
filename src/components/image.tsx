import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

interface IQueryResult {
  allFile: {
    nodes: ReadonlyArray<{
      publicURL: string;
      relativePath: string;
    }>;
  };
}

interface IImageProps {
  label: string;
  src: string;
}

export const Image = ({ label, src: relativePath }: IImageProps) => {
  const { allFile } = useStaticQuery<IQueryResult>(
    graphql`
      query ImageQuery {
        allFile {
          nodes {
            publicURL
            relativePath
          }
        }
      }
    `,
  );

  const image = allFile.nodes.find(
    (file) => file.relativePath === relativePath,
  );

  return <img alt={label} src={image?.publicURL ?? relativePath} />;
};
