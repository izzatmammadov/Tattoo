import { ContactFind } from "@/shared/components/ContactFind";
import { ContactForm } from "@/shared/components/ContactForm";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Head from "next/head";
import React from "react";

function Contact() {
  return (
    <>
      <Head>
        <title>TATTOSHOP | Contact</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>

      <Header />
      <section className="bg-[#212121] flex flex-col sm:flex-row justify-center gap-20 sm:gap-10 p-5 sm:p-10">
        <ContactForm/>
        <ContactFind/>
      </section>
      <Footer/>
    </>
  );
}

export default Contact;
