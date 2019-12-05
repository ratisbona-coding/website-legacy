import { graphql } from "gatsby";
import * as React from "react";
import { MarkdownAstRenderer } from "../components/markdown-ast-renderer";

interface IQueryResult {
  markdownRemark: {
    ast: any;
    frontmatter: {
      date: string;
      title: string;
    };
  };
}

interface ITemplateProps {
  data: IQueryResult;
}

export default ({ data }: ITemplateProps) => (
  <>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <h2>{data.markdownRemark.frontmatter.date}</h2>

    <MarkdownAstRenderer ast={data.markdownRemark.ast} />
  </>
);

export const pageQuery = graphql`
  query BlogTemplateQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ast: htmlAst

      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
