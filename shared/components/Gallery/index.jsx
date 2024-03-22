import Image from "next/image";
import React from "react";

export const Gallery = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex justify-center items-center gap-8 sm:gap-16 w-full pl-0 p-5 overflow-x-auto"
    >
      {/* for slider */}
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={""}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={""}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={""}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={""}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      {/* slider end */}

      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={"/tattoo1.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={"/tattoo8.jpeg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={"/tattooo3.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={"/tattoo2.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={"/tattoo4.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7]  p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
          width={1000}
          height={0}
          src={"/tattoo5.jpg"}
          alt="tattoo"
        />
        <p className="font-amita text-center text-4xl my-5">X</p>
      </div>
      <div className="w-[90%] sm:w-[30%] rounded-sm bg-[#e7e7e7] p-5 pb-0 flex-shrink-0">
        <Image
          className="w-full brightness-90 rounded-sm"
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
