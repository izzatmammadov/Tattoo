import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <footer className="w-full bg-black flex flex-col gap-12 py-8 sm:py-20">
      <div
        data-aos="zoom-in"
        className="flex items-center gap-6 justify-center"
      >
        <a
          href="https://www.tiktok.com/@tattoorzayev?_t=8kZ8P0ZPOfI&_r=1"
          target="_blank"
        >
          <Image
            className="w-[30px] h-[30px] hover:scale-95 transition-all duration-300 cursor-pointer"
            width={1000}
            height={0}
            src={"/tiktok.png"}
            alt="tiktok"
          />
        </a>

        <Image
          className="w-[30px] h-[30px] hover:scale-95 transition-all duration-300 cursor-pointer"
          width={1000}
          height={0}
          src={"/facebook.png"}
          alt="facebook"
        />

        <a
          href="https://www.instagram.com/tattoorzayev?igsh=bXVycXp0Z3kwN3l2"
          target="_blank"
        >
          <Image
            className="w-[30px] h-[30px] hover:scale-95 transition-all duration-300 cursor-pointer"
            width={1000}
            height={0}
            src={"/instagram.png"}
            alt="instagram"
          />
        </a>
      </div>

      <ul
        data-aos="zoom-in"
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 font-poppins text-xl text-[#888]"
      >
        <li
          onClick={() => router.push("/")}
          className="cursor-pointer hover:text-[#e7e7e7] transition-all duration-300"
        >
          {t("nav1")}
        </li>
        <li
          onClick={() => router.push("/about")}
          className="cursor-pointer hover:text-[#e7e7e7] transition-all duration-300"
        >
          {t("nav2")}
        </li>
        <li
          onClick={() => router.push("/aftercare")}
          className="cursor-pointer hover:text-[#e7e7e7] transition-all duration-300"
        >
          {t("nav4")}
        </li>
        <li
          onClick={() => router.push("/contact")}
          className="cursor-pointer hover:text-[#e7e7e7] transition-all duration-300"
        >
          {t("nav3")}
        </li>
        <li
          onClick={() => router.push("/faq")}
          className="cursor-pointer hover:text-[#e7e7e7] transition-all duration-300"
        >
          {t("nav5")}
        </li>
      </ul>

      <div className="text-center font-medium text-[#e7e7e7] font-poppins text-[14px]">
          {t("footer")}
      </div>
    </footer>
  );
};
