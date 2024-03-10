import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const SecondSection = () => {
  const { t } = useTranslation();
  const [showMaga, setShowMaga] = useState(false);
  const router = useRouter()

  return (
    <section className="bg-[#0a0a0a] text-[#e7e7e7] flex flex-col gap-12 py-8 sm:p-16">
      <div  className="text-center flex flex-col items-center justify-center gap-12">
        <h2 data-aos="fade-down" className="font-amita text-[#dbae01] text-4xl font-bold">
        {t("home6")}
        </h2>
        <p data-aos="fade-down" className="leading-7 font-poppins w-[95%] mx-auto">
        {t("home7")}
        </p>
        <p data-aos="fade-down"  className="font-poppins text-[#dbae01]">{t("home8")}</p>
      </div>

      <div data-aos="fade-up" className="flex flex-col p-4 sm:p-0 sm:flex-row items-center justify-center gap-12">
        <div data-aos="fade-up"
          className="w-full sm:w-1/4 cursor-pointer transition-all duration-500 relative"
          onMouseEnter={() => setShowMaga(true)}
          onMouseLeave={() => setShowMaga(false)}
          onClick={()=>router.push("/about-muhammed-rzayev")}
        >
          <Image
            className="grayscale rounded-sm"
            width={1000}
            height={0}
            src={"/magaa.png"}
            alt="maga"
          />
          {showMaga && (
            <p className="absolute font-poppins text-xl inset-0 flex items-center justify-center bg-black bg-opacity-15 text-[#e7e7e7]">
              {t("name")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
