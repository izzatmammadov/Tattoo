import Image from "next/image";
import React from "react";

export const FirstSection = () => {
  return (
    <section className=" bg-[#000] text-white flex flex-col sm:flex-row justify-between py-8 sm:p-16 gap-12 sm:gap-4">
      <div  className=" font-poppins font-light w-full sm:w-1/2 flex flex-col px-5 sm:p-0 gap-5">
        <h1 data-aos="fade-down" className="text-4xl text-center font-amita text-[#dbae01] font-bold">
          TATTOSHOP - BAKU, AZERBAIJAN
        </h1>
        <p data-aos="fade-down" className="leading-7 text-center sm:text-justify">
          We are located in Baku, Azerbaijan. We are open 7 days a week from
          12PM – 1AM. You can make an appointment through our form below or by
          calling{" "}
          <a className="text-[#dbae01]" target="_blank" href="https://wa.me/+994558390077">
            (+994) 55 839 00 77
          </a>
          .
        </p>
        <p data-aos="fade-up" className="leading-7 text-center sm:text-justify">
        <mark className=" bg-[#dbae01] text-white">The shop is owned by Muhammed Rzayev.</mark> Maga is a highly acclaimed
          tattoo artist, and he is one of Baku's very own. The entire team is
          dedicated to always growing with the tattoo industry, embracing new
          techniques, and offering both full color and grey colors tattoos.
        </p>
        <p data-aos="fade-up" className="leading-7 text-center sm:text-justify">
          Our shop is an extension of who we are. Our work ethic and integrity
          have been ingrained here. We strive to create a welcoming atmosphere
          for ourselves as well as our clients. Each staff member has their own
          private station to ensure comfort and privacy. We keep our shop
          immaculate and take pride in maintaining a safe and sanitary
          environment. Our goal is to always have all clients walk out with a
          piece of art on their body that they will love for life.
        </p>
      </div>
      
      <div data-aos="fade-up" className="w-full sm:w-1/2"><Image className=" brightness-75 w-3/4 rounded-full mx-auto" width={1000} height={0} src={"/dragon.jpg"} alt="dragon"/></div>
    </section>
  );
};
