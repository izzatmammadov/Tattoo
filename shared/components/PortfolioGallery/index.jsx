import React from "react";
import { Gallery } from "../Gallery";
import { useTranslation } from "react-i18next";

export const PortfolioGallery = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center bg-[#0a0a0a]">
      <div className="py-20 px-5 sm:p-20 flex flex-col justify-center items-center gap-5">
        <p className="font-amita text-[#dbae01] text-4xl">{t("portfolio4")}</p>
        <p className="font-poppins text-[#e7e7e7] text-center">
          {t("portfolio5")}
        </p>
      </div>

      <Gallery />
    </section>
  );
};
