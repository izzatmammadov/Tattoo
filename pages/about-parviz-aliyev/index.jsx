import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function AboutParvizAliyev() {
  const router = useRouter();
  return (
    <>
    <Head>
        <title>Parviz Aliyev</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>

      <Header />
      <section className="flex flex-col sm:flex-row-reverse sm:h-[600px] bg-[#212121]">
        <div className="w-full sm:w-[50%] flex flex-col p-5 justify-center items-center gap-4">
          <p
            data-aos="zoom-in"
            className="font-amita text-[#dbae01] text-center text-4xl"
          >
            Parviz Aliyev
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins text-center text-white leading-7 font-light"
          >
            He is a young and emerging talent in the world of tattoo artistry.
            At just 19 years old, he has already dedicated two years to refining
            his skills in this intricate craft. Despite his relatively short
            time in the industry, Parviz's commitment and passion for tattooing
            have likely driven him to rapidly develop his artistic abilities.
            Given his age and experience level, Parviz is likely exploring
            various styles and techniques within tattooing to find his niche and
            develop his own unique artistic voice. This early stage of his
            career presents an exciting opportunity for growth and
            experimentation as he hones his craft and builds a name for himself
            in the tattooing community. With time, dedication, and continued
            practice, Parviz has the potential to become a notable figure in the
            world of tattoo artistry.
          </p>

          <p
            data-aos="fade-up"
            className="font-poppins text-center text-white leading-7 font-light"
          >
            Parviz Aliyev's multifaceted talents extend beyond tattooing; he's also recognized as a graffiti master. This additional skill set adds another layer of creativity and artistic expression to his repertoire. Graffiti art demands a different set of techniques and approaches compared to tattooing, yet both forms of art share elements of visual storytelling and self-expression.
          </p>

          <div
            data-aos="fade-up"
            className="flex items-center gap-3 justify-center"
          >
            <Image
              className=" animate-pulse"
              width={30}
              height={0}
              src={"/whatsapp.png"}
              alt="wp"
            />
            <a
              className="text-[#777] hover:text-[#dbae01] text-lg"
              target="_blank"
              href="https://wa.me/+994557838821"
            >
              (+994) 55 783 88 21
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center gap-3 justify-center"
          >
            <Image
              className=" animate-pulse"
              width={30}
              height={0}
              src={"/instagramm.png"}
              alt="instagram"
            />
            <a
              className="text-[#777] hover:text-[#dbae01] text-lg"
              target="_blank"
              href="https://www.instagram.com/pako.aliyev?igsh=OHN1MmF6d2N1M2F1"
            >
              @pako.aliyev
            </a>
          </div>
          <button
            data-aos="fade-up"
            className="block sm:hidden text-xl font-poppins text-[#dbae01]"
            onClick={() => router.push("/")}
          >
            &#10094; Back
          </button>
        </div>

        <div data-aos="fade-up" className="w-full p-5 sm:w-[50%]">
          <Image
            className="w-full h-full object-fill grayscale brightness-75"
            width={1000}
            height={0}
            src={"/pakoo.png"}
            alt="pako"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutParvizAliyev;
