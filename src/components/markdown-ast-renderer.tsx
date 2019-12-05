import * as React from "react";
import rehypeReact from "rehype-react";
import { Image } from "./image";
import { Link } from "./link";

interface IWrappedLinkProps {
  children: React.ReactNode;
  href: string;
}

const WrappedLink = ({ children, href }: IWrappedLinkProps) => {
  const label = Array.isArray(children) ? children[0] : children;

  return (
    <Link to={href} label={typeof label === "string" ? label : ""}>
      {children}
    </Link>
  );
};

interface IWrappedImageProps {
  alt: string;
  src: string;
}

const WrappedImage = ({ alt, src }: IWrappedImageProps) => (
  <Image label={alt} src={src} />
);

const renderAst = new rehypeReact({
  components: { a: WrappedLink, img: WrappedImage },
  createElement: React.createElement,
}).Compiler;

interface IMarkdownAstRenderer {
  ast: any;
}

export const MarkdownAstRenderer = ({ ast }: IMarkdownAstRenderer) => (
  <div>{renderAst(ast)}</div>
);
