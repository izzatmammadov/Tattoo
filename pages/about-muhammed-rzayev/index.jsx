import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function AboutMuhammedRzayev() {
  const router = useRouter();
  return (
    <>
      <Header />
      <section className="flex flex-col sm:flex-row sm:h-[600px] bg-[#212121]">
        <div className="w-full sm:w-[50%] flex flex-col p-5 justify-center items-center gap-4">
          <p
            data-aos="zoom-in"
            className="font-amita text-[#dbae01] text-center text-4xl"
          >
            Muhammed Rzayev
          </p>
          <p
            data-aos="fade-up"
            className="font-poppins text-center text-white leading-7 font-light"
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
            className="font-poppins text-center text-white leading-7 font-light"
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
            src={"/maga.png"}
            alt="maga"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutMuhammedRzayev;
