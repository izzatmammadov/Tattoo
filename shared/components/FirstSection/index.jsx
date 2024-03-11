import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export const FirstSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#000] text-[#e7e7e7] flex flex-col sm:flex-row justify-between py-8 px-5 sm:p-16 gap-12 sm:gap-4">
      <div className="font-poppins font-light w-full sm:w-1/2 flex flex-col gap-5">
        <h1
          data-aos="fade-down"
          className="text-4xl text-center font-amita text-[#dbae01] font-bold"
        >
          {t("home1")}
        </h1>
        <p
          data-aos="fade-down"
          className="leading-7 text-center sm:text-justify"
        >
          {t("home2")} <br/> <a
            className="text-[#dbae01]"
            target="_blank"
            href="https://wa.me/+994558390077"
          >
            (+994) 55 839 00 77
          </a>
          .
        </p>
        <p data-aos="fade-up" className="leading-7 text-center sm:text-justify">
          <mark className=" bg-[#dbae01] text-white">
          {t("home3")}
          </mark>{" "}
          {t("home4")}
        </p>
        <p data-aos="fade-up" className="leading-7 text-center sm:text-justify">
        {t("home5")}
        </p>
      </div>

      <div data-aos="fade-up" className="w-full sm:w-1/2">
        <Image
          className=" brightness-75 w-full sm:w-3/4 rounded-full mx-auto"
          width={1000}
          height={0}
          src={"/dragon.jpg"}
          alt="dragon"
        />
      </div>
    </section>
  );
};
