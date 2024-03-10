import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function AboutMuhammedRzayev() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Muhammed Rzayev</title>
        <meta name="description" content="This is a description of my page" />
        <link rel="icon" href="/dragon.jpg" />
      </Head>
      <Header />
      <section className="flex flex-col sm:flex-row sm:h-[700px] bg-[#000]">
        <div className="w-full sm:w-[60%] flex flex-col p-5 justify-center items-center gap-10">
          <p
            data-aos="zoom-in"
            className="font-amita text-[#dbae01] text-center text-[32px] sm:text-4xl"
          >
            Muhammed Rzayev
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins text-center text-[#e7e7e7] leading-7"
          >
            He is a talented tattoo artist who started honing his craft at a
            remarkably young age. At just 26 years old, he already boasts eight
            years of experience in the tattoo industry. His dedication and
            passion for his art form have undoubtedly contributed to his success
            and proficiency as a tattoo artist. With such a substantial amount
            of experience under his belt, Muhammed likely has developed a unique
            style and skill set that sets him apart in the tattooing community.
          </p>

          <p
            data-aos="fade-up"
            className="font-poppins text-center text-[#e7e7e7] leading-7"
          >
            Specialization in realistic tattoo works speaks volumes about his
            skill and artistic vision. Creating realistic tattoos requires a
            keen eye for detail, mastery of shading and color, and a deep
            understanding of human anatomy. By focusing on realism, Muhammed
            demonstrates his ability to capture the intricacies of his subjects
            and bring them to life on his clients' skin. This dedication to
            realism not only showcases his technical proficiency but also his
            commitment to delivering tattoos that resonate with his clients on a
            deeply personal level.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 w-full">
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
                href="https://wa.me/+994558390077"
              >
                (+994) 55 839 00 77
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
                href="https://www.instagram.com/tattoorzayev?igsh=bXVycXp0Z3kwN3l2"
              >
                @tattoorzayev
              </a>
            </div>
          </div>

          <button
            data-aos="fade-up"
            className="block sm:hidden text-xl font-poppins text-[#dbae01]"
            onClick={() => router.push("/")}
          >
            &#10094; Back
          </button>
        </div>

        <div data-aos="fade-up" className="w-full p-5 sm:w-[40%]">
          <Image
            className="w-full rounded-sm h-full object-fill grayscale brightness-75"
            width={1000}
            height={0}
            src={"/magaa.png"}
            alt="maga"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-[#0a0a0a]">
        <div className="py-20 px-5 sm:p-20 flex flex-col justify-center items-center gap-5">
          <p className="font-amita text-[#dbae01] text-4xl">PORTFOLIO</p>
          <p className="font-poppins text-[#e7e7e7] text-center">
            Here's just a small portion displayed here, for more and for your
            own ideas, head over to Instagram or use the contact links.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 sm:gap-16 flex-wrap w-full p-5 sm:p-10 sm:pt-0">
          <div
            data-aos="fade-up"
            className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  brightness-90 p-5 pb-0"
          >
            <Image
              className="w-full"
              width={1000}
              height={0}
              src={"/tattoo1.jpg"}
              alt="tattoo"
            />
            <p className="font-amita text-center text-4xl my-5">X</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  brightness-90 p-5 pb-0"
          >
            <Image
              className="w-full"
              width={1000}
              height={0}
              src={"/tattoo2.jpg"}
              alt="tattoo"
            />
            <p className="font-amita text-center text-4xl my-5">X</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  brightness-90 p-5 pb-0"
          >
            <Image
              className="w-full"
              width={1000}
              height={0}
              src={"/tattooo3.jpg"}
              alt="tattoo"
            />
            <p className="font-amita text-center text-4xl my-5">X</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  brightness-75 p-5 pb-0"
          >
            <Image
              className="w-full"
              width={1000}
              height={0}
              src={"/tattoo4.jpg"}
              alt="tattoo"
            />
            <p className="font-amita text-center text-4xl my-5">X</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  brightness-75 p-5 pb-0"
          >
            <Image
              className="w-full"
              width={1000}
              height={0}
              src={"/tattoo5.jpg"}
              alt="tattoo"
            />
            <p className="font-amita text-center text-4xl my-5">X</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full sm:w-[30%] rounded-sm bg-[#e7e7e7]  brightness-90 p-5 pb-0"
          >
            <Image
              className="w-full"
              width={1000}
              height={0}
              src={"/tattoo6.jpg"}
              alt="tattoo"
            />
            <p className="font-amita text-center text-4xl my-5">X</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutMuhammedRzayev;
