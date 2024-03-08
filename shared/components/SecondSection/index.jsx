import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const SecondSection = () => {
  const [showMaga, setShowMaga] = useState(false);
  const [showPako, setShowPako] = useState(false);
  const router = useRouter()

  return (
    <section className="bg-[#212121] text-white flex flex-col gap-12 py-8 sm:p-16">
      <div  className="text-center flex flex-col items-center justify-center gap-12">
        <h2 data-aos="fade-down" className="font-amita text-[#dbae01] text-4xl font-bold">
          MEET THE TEAM
        </h2>
        <p data-aos="fade-down" className="leading-7 font-poppins w-[95%] mx-auto">
          We specialize in many different tattoo genres with each artist staying
          true to their expertise. We are always looking to break boundaries to
          provide you with a truly unique piece. We prefer working with our
          clients and collaborate on new ideas, or adding to existing ones, to
          achieve a finished product that leaves everyone satisfied. Our
          greatest reward is to leave you feeling proud with your new work.
        </p>
      </div>

      <div data-aos="fade-up" className="flex flex-col p-4 sm:p-0 sm:flex-row items-center justify-center gap-12">
        <div data-aos="fade-up"
          className="w-full sm:w-1/5 cursor-pointer transition-all duration-500 relative"
          onMouseEnter={() => setShowMaga(true)}
          onMouseLeave={() => setShowMaga(false)}
          onClick={()=>router.push("/about-muhammed-rzayev")}
        >
          <Image
            className="grayscale hover:scale-105 transition-all duration-500"
            width={1000}
            height={0}
            src={"/magaa.png"}
            alt="maga"
          />
          {showMaga && (
            <p className="absolute font-poppins text-xl inset-0 flex items-center justify-center bg-black bg-opacity-15 text-white">
              Muhammed Rzayev
            </p>
          )}
        </div>

        <div data-aos="fade-up"
          className="w-full sm:w-1/5 cursor-pointer transition-all duration-500 relative"
          onMouseEnter={() => setShowPako(true)}
          onMouseLeave={() => setShowPako(false)}
          onClick={()=>router.push("/about-parviz-aliyev")}
        >
          <Image
            className="grayscale hover:scale-105 transition-all duration-500"
            width={1000}
            height={0}
            src={"/pakoo.png"}
            alt="pako"
          />
          {showPako && (
            <p className="absolute font-poppins text-xl inset-0 flex items-center justify-center bg-black bg-opacity-15 text-white">
              Parviz Aliyev
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
