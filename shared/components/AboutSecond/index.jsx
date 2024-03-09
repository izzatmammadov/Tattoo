import React from "react";
import style from "./aboutSecond.module.css";

export const AboutSecond = () => {
  return (
    <section className="h-[890px] relative">
      <div className={`${style.poster} h-full`}>
        <div className="flex flex-col justify-center m-auto h-full items-center backdrop-blur-sm text-white text-center gap-6 p-5 sm:px-0">
          <p
            data-aos="fade-down"
            className="font-amita text-[#dbae01] w-[95%] text-4xl sm:w-full sm:text-5xl mb-10"
          >
            WE HAVE A DEEP UNDERSTANDING OF ART
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins leading-7 w-full sm:w-4/5"
          >
            Tattoo artists must have a clear and deep understanding not to
            mention an appreciation of art. That is the reason they are called
            artists. Having an understanding of art goes hand in hand with
            passion and talent (skill). Having these traits will give you the
            ability to pull off incredible ink art. However, as much as you have
            the skill to be on the pedestal of success, learning about art takes
            time, patience and practice.
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins leading-7 w-full sm:w-4/5"
          >
            You especially need to have a sound and creative mind and couple
            this with putting down your sketches on paper trying to make it as
            unique and appealing as possible. Some artists go to such extents of
            sculpting out their ideas into physical 3D models to portray a clear
            design. If you take up the challenge of learning about art, you can
            do frequent research from different books or take art classes to
            start you off. In good time, you just might be able to ink skin
            perfectly just as we do.
          </p>
        </div>
      </div>
    </section>
  );
};
