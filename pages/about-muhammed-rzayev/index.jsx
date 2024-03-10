import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import { PortfolioGallery } from "@/shared/components/PortfolioGallery";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

function AboutMuhammedRzayev() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Muhammed Rzayev</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>
      <Header />
      <section className="flex flex-col sm:flex-row sm:h-[700px] bg-[#000]">
        <div className="w-full sm:w-[60%] flex flex-col p-5 justify-center items-center gap-10">
          <p
            data-aos="zoom-in"
            className="font-amita text-[#dbae01] text-center text-[32px] sm:text-4xl"
          >
            {t("name")}
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins text-center text-[#e7e7e7] leading-7"
          >
            {t("portfolio1")}
          </p>

          <p
            data-aos="fade-up"
            className="font-poppins text-center text-[#e7e7e7] leading-7"
          >
            {t("portfolio2")}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div
              data-aos="fade-up"
              className="flex items-center gap-3 justify-center"
            >
              <Image
                width={30}
                height={0}
                src={"/tiktok.png"}
                alt="wp"
              />
              <a
                className="text-[#777] hover:text-[#dbae01] text-lg"
                target="_blank"
                href="https://www.tiktok.com/@tattoorzayev?_t=8kZ8P0ZPOfI&_r=1"
              >
                @tattoorzayev
              </a>
            </div>

            <div
              data-aos="fade-up"
              className="flex items-center gap-3 justify-center"
            >
              <Image
                width={30}
                height={0}
                src={"/instagramm.png"}
                alt="instagram"
              />
              <a
                className="text-[#777] hover:text-[#dbae01] text-lg"
                target="_blank"
                href="https://www.instagram.com/tattoorzayev?igsh=bXVycXp0Z3kwN3l2"
              >
                @tattoorzayev
              </a>
            </div>
          </div>

          <button
            data-aos="fade-up"
            className="block sm:hidden text-xl font-poppins text-[#dbae01]"
            onClick={() => router.push("/")}
          >
            &#10094; {t("portfolio3")}
          </button>
        </div>

        <div data-aos="fade-up" className="w-full p-5 sm:w-[40%]">
          <Image
            className="w-full rounded-sm h-full object-fill grayscale brightness-75"
            width={1000}
            height={0}
            src={"/magaa.png"}
            alt="maga"
          />
        </div>
      </section>

      <PortfolioGallery/>
      <Footer />
    </>
  );
}

export default AboutMuhammedRzayev;
