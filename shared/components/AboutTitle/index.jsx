import React from "react";
import { useTranslation } from "react-i18next";

export const AboutTitle = () => {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-down" className=" text-center p-5 sm:p-16">
      <p className="w-full sm:w-[90%] mx-auto leading-7 text-[#e7e7e7] font-light font-poppins">
        {t("about1")}
      </p>
    </div>
  );
};
