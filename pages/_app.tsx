import React from "react";
import type { AppProps } from "next/app";
import Head from "../components/Head";
import "../styles/globals.scss";

function MyApp({ Component: Body, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Body {...pageProps} />
    </>
  );
}

export default MyApp;
