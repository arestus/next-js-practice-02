import "../styles/globals.scss";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import Image from "next/image";
import youtube from "../public/youtube.png";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image src={youtube} alt="youtube" width={500} height={350} placeholder="blur" /> */}
    </Layout>
  );
}
