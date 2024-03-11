import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import style from "./second.module.css";

export const SecondSection = () => {
  const { t } = useTranslation();
  const [showMaga, setShowMaga] = useState(false);
  const router = useRouter();

  return (
    <section className="bg-[#0a0a0a] text-[#e7e7e7] flex flex-col gap-12 py-8 px-5 sm:p-16">
      <div className="text-center flex flex-col items-center justify-center gap-5 sm:gap-12">
        <h2
          data-aos="fade-down"
          className="font-amita text-[#dbae01] text-center text-4xl font-bold"
        >
          {t("home6")}
        </h2>
        <p
          data-aos="fade-up"
          className="leading-7 font-poppins w-full sm:w-[95%] mx-auto"
        >
          {t("home7")}
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-5"
      >
        <p className="font-poppins text-center text-lg text-[#dbae01]">
          {t("home8")}
        </p>

        <div
          className={`${style.animation} w-full sm:w-1/4 cursor-pointer transition-all rounded-sm duration-500 relative p-5 pb-0 bg-[#e7e7e7]`}
          onMouseEnter={() => setShowMaga(true)}
          onMouseLeave={() => setShowMaga(false)}
          onClick={() => router.push("/about-muhammed-rzayev")}
        >
          <Image
            className="grayscale rounded-sm"
            width={1000}
            height={0}
            src={"/magaa.png"}
            alt="maga"
          />
          <p className="font-amita text-black text-center text-4xl my-5">X</p>
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
