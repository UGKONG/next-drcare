import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "./Head";
import Header from "./Header";

function MyApp({ Component: Body, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Header />
      <Body {...pageProps} />
    </>
  );
}

export default MyApp;
