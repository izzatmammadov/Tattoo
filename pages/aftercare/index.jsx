import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

function Aftercare() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>TATTOSHOP | Aftercare</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>

      <Header />
      <div className="leading-7 text-[#e7e7e7] bg-[#0a0a0a] text-center sm:text-justify font-poppins flex flex-col gap-4 sm:gap-10 p-5 sm:p-10">
        <p className="text-center" data-aos="fade-up">
          {t("aftercare1")}
        </p>

        <p className="text-center" data-aos="fade-up">
        {t("aftercare2")}
        </p>

        <p className="text-center" data-aos="fade-up">
        {t("aftercare3")}
        </p>

        <p className="text-center" data-aos="fade-up">
        {t("aftercare4")}
        </p>

        <p className="text-center" data-aos="fade-up">
        {t("aftercare5")}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Aftercare;
