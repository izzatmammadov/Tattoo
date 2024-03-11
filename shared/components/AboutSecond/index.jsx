import React from "react";
import style from "./aboutSecond.module.css";
import { useTranslation } from "react-i18next";

export const AboutSecond = () => {
  const { t } = useTranslation();

  return (
    <section className="h-[1000px] relative">
      <div className={`${style.poster} h-full`}>
        <div className="flex flex-col justify-center m-auto h-full items-center backdrop-blur-sm text-[#e7e7e7] text-center gap-5 p-5 sm:px-0">
          <p
            data-aos="fade-down"
            className="font-amita text-[#dbae01] text-4xl w-full mb-0 sm:mb-10"
          >
            {t("about2")}
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins leading-7 w-full sm:w-4/5"
          >
            {t("about3")}
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins leading-7 w-full sm:w-4/5"
          >
            {t("about4")}
          </p>

          <p
            data-aos="fade-up"
            className="font-poppins hidden sm:block leading-7 w-full sm:w-4/5"
          >
            {t("about5")}
          </p>
        </div>
      </div>
    </section>
  );
};
