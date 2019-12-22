import * as React from "react";
import Helmet from "react-helmet";
import { accentColor } from "../constants";
import { Navbar } from "./navbar";
import "./page.css";

interface IPageProps {
  title?: string;
  children: React.ReactNode;
}

export const Page = ({
  children,
  title = "ratisbona coding e.V.",
}: IPageProps) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="theme-color" content={accentColor} />

      <title>{title}</title>
    </Helmet>

    {children}

    <Navbar />
  </>
);
