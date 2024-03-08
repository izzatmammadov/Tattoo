import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className="w-full bg-black flex flex-col gap-12 py-8 sm:py-20">
      <div
        data-aos="zoom-in"
        className="flex items-center gap-6 justify-center"
      >
        <Image
          className="w-[30px] h-[30px] hover:scale-95 transition-all duration-300 cursor-pointer"
          width={1000}
          height={0}
          src={"/facebookk.png"}
          alt="facebook"
        />
        <Image
          className="w-[30px] h-[30px] hover:scale-95 transition-all duration-300 cursor-pointer"
          width={1000}
          height={0}
          src={"/twitterr.png"}
          alt="twitter"
        />
        <Image
          className="w-[30px] h-[30px] hover:scale-95 transition-all duration-300 cursor-pointer"
          width={1000}
          height={0}
          src={"/instagramm.png"}
          alt="instagram"
        />
      </div>

      <ul
        data-aos="zoom-in"
        className="flex justify-center gap-4 sm:gap-12 font-poppins text-md sm:text-xl text-[#888]"
      >
        <li
          onClick={() => router.push("/")}
          className="cursor-pointer hover:text-white transition-all duration-300"
        >
          Home
        </li>
        <li
          onClick={() => router.push("/about")}
          className="cursor-pointer hover:text-white transition-all duration-300"
        >
          About us
        </li>
        <li
          onClick={() => router.push("/aftercare")}
          className="cursor-pointer hover:text-white transition-all duration-300"
        >
          Aftercare
        </li>
        <li
          onClick={() => router.push("/contact")}
          className="cursor-pointer hover:text-white transition-all duration-300"
        >
          Contact
        </li>
        <li
          onClick={() => router.push("/faq")}
          className="cursor-pointer hover:text-white transition-all duration-300"
        >
          FAQ
        </li>
      </ul>

      <div className="text-center font-medium text-white font-poppins text-[14px]">
        © 2018 All right reserved
      </div>
    </footer>
  );
};
