import Image from "next/image";
import React from "react";

export const Gallery = () => {
  return (
    <div className="flex justify-center items-center gap-8 sm:gap-16 flex-wrap w-full p-5 sm:p-10 sm:pt-0">
      <div
        data-aos="fade-up"
        
        className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0"
      >
        <Image
          className="w-full brightness-90"
          width={1000}
          height={0}
          src={"/tattoo1.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div
        data-aos="fade-up"
        className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0"
      >
        <Image
          className="w-full brightness-90"
          width={1000}
          height={0}
          src={"/tattoo2.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div
        data-aos="fade-up"
        className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0"
      >
        <Image
          className="w-full brightness-90"
          width={1000}
          height={0}
          src={"/tattooo3.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div
        data-aos="fade-up"
        className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0"
      >
        <Image
          className="w-full brightness-90"
          width={1000}
          height={0}
          src={"/tattoo4.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div
        data-aos="fade-up"
        className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0"
      >
        <Image
          className="w-full brightness-90"
          width={1000}
          height={0}
          src={"/tattoo5.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div
        data-aos="fade-up"
        className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7] p-5 pb-0"
      >
        <Image
          className="w-full brightness-90"
          width={1000}
          height={0}
          src={"/tattoo6.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
    </div>
  );
};
