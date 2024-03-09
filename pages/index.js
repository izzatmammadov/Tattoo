import { FirstSection } from "@/shared/components/FirstSection";
import { Header } from "../shared/components/Header";
import Head from "next/head";
import { SecondSection } from "@/shared/components/SecondSection";
import { Footer } from "@/shared/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>TATTOSHOP | Home</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>

        <Header />
        <FirstSection/>
        <SecondSection/>
        <Footer/>
    </>
  );
}
