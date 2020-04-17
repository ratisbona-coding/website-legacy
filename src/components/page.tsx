import * as React from "react";
import Helmet from "react-helmet";
import { Background } from "./background";
import { siteDescription, siteTitle } from "../constants";
import { accentColor } from "../constants";
import "./page.css";

interface IPageProps {
  children: React.ReactNode;
  title: string;
}

export const Page = ({ children, title = siteTitle }: IPageProps) => {
  return (
    <Background>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="" />
        <meta name="theme-color" content={accentColor} />

        <title>{title}</title>
      </Helmet>

      {children}
    </Background>
  );
};
