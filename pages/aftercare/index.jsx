import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Head from "next/head";
import React from "react";

function Aftercare() {
  return (
    <>
      <Head>
        <title>TATTOSHOP | Aftercare</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>

      <Header />
      <div className="leading-7 text-white bg-[#212121] text-center sm:text-justify font-poppins flex flex-col gap-10 text-lg p-5 sm:p-10">
        <p data-aos="fade-up">
          The aftercare of your tattoo is just as important, if not more
          important, than getting the actual tattoo. Please keep in mind that
          tattoos are not permanent until they have fully healed. This means
          that if a tattoo doesn’t heal properly, it may not turn out as you
          wanted it to. This is why we also give our customers the proper
          aftercare steps in order for the tattoo to come out perfect.
        </p>

        <p data-aos="fade-up">
          There are a few common misconceptions and mistakes that are often
          heard. The first is not washing the area of a tattoo for an extended
          period of time while using lotion over the tattoo. Lotions do work
          well to care for tattoos, but the problem is that it suffocates the
          area. The tattoo needs to air out in order to heal. If a large sum of
          lotion is often used over the tattoo, it can cause an infection. If
          you use lotion, be sure to only use a small amount, and rinse and
          reapply the lotion rather than leaving it on for a long time.
        </p>

        <p data-aos="fade-up">
          When washing the area, make sure you don’t submerge the tattoo under
          water. This means no diving into pools either! When you clean the
          area, use a damp clean cloth, and pat it around the area. Be sure to
          dry it properly to avoid infections. It’s also a good idea to use
          fragrance free lotions and soaps as it may irritate the skin.
        </p>

        <p data-aos="fade-up">
          Another thing you want to avoid is direct sunlight after a fresh
          tattoo. If you’re planning on getting a tattoo and you’re leaving off
          to Cancun the next day or it’s a hot summer day out, keep that tattoo
          covered. Don’t go off to the beach and let the sun beam on it. The sun
          will cause the tattoo to burn, scab, heal poorly, and also it will
          hurt.
        </p>

        <p data-aos="fade-up">
          If you have any questions about the aftercare of the tattoo, it’s
          essential that you contact us. We want to make sure that you have the
          best looking tattoo possible. As tattoo artists, we can give you the
          best looking tattoo possible, but it is your responsibility to take
          care of the tattoo.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Aftercare;
