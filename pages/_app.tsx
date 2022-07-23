import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "./cmn/Head";

function MyApp({ Component: Body, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Body {...pageProps} />
    </>
  );
}

export default MyApp;
