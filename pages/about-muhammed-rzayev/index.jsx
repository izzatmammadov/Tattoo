import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import { PortfolioGallery } from "@/shared/components/PortfolioGallery";
import { PortfolioTitle } from "@/shared/components/PortfolioTitle";
import Head from "next/head";
import React from "react";

function AboutMuhammedRzayev() {
  return (
    <>
      <Head>
        <title>Muhammed Rzayev</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>
      <Header />
      <PortfolioTitle/>
      <PortfolioGallery/>
      <Footer />
    </>
  );
}

export default AboutMuhammedRzayev;
