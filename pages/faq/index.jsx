import { FaqQuestions } from "@/shared/components/FaqQuestions";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Head from "next/head";
import React from "react";

function Faq() {
  return (
    <>
      <Head>
        <title>TATTOSHOP | FAQ</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>
      <Header />
      <FaqQuestions />
      <Footer />
    </>
  );
}

export default Faq;
