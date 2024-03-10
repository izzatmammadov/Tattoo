import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav data-aos="zoom-in" className="fixed z-50 w-full font-amita hidden sm:flex justify-center items-center gap-5 text-[#dbae01] backdrop-blur-md font-bold text-2xl">
        <ul className="flex gap-8">
          <li onClick={()=>router.push("/")} className={`cursor-pointer hover:text-[#7a1622] duration-300 transition-all ${router.pathname === "/" && "text-[#7a1622]"}`}>
            HOME
          </li>
          <li onClick={()=>router.push("/about")} className={`cursor-pointer hover:text-[#7a1622] duration-300 transition-all ${router.pathname === "/about" && "text-[#7a1622]"}`}>
            ABOUT US
          </li>
          <li onClick={()=>router.push("/store")} className={`cursor-pointer hover:text-[#7a1622] duration-300 transition-all ${router.pathname === "/store" && "text-[#7a1622]"}`}>
            STORE
          </li>
        </ul>

        <div>
          <Image width={100} height={0} src={"/logoyellow.png"} alt="logo" />
        </div>

        <ul className="flex gap-8">
          <li onClick={()=>router.push("/prices")} className={`cursor-pointer hover:text-[#7a1622] duration-300 transition-all ${router.pathname === "/prices" && "text-[#7a1622]"}`}>
            PRICES
          </li>
          <li onClick={()=>router.push("/contact")} className={`cursor-pointer hover:text-[#7a1622] duration-300 transition-all ${router.pathname === "/contact" && "text-[#7a1622]"}`}>
            CONTACT
          </li>
          <li onClick={()=>router.push("/faq")} className={`cursor-pointer hover:text-[#7a1622] duration-300 transition-all ${router.pathname === "/faq" && "text-[#7a1622]"}`}>
            FAQ
          </li>
        </ul>
      </nav>

      <nav data-aos="zoom-in" className="fixed sm:hidden z-50 w-full text-white backdrop-blur-md p-2 flex justify-between items-center">
        <Image
          className="cursor-pointer"
          width={60}
          height={0}
          src={"/logoyellow.png"}
        />
        <Image
          className="cursor-pointer"
          width={60}
          height={0}
          src={"/hamburgerr.png"}
          onClick={toggleMenu}
        />
      </nav>

      {menuOpen && (
        <div data-aos="fade-left" className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-black bg-opacity-50 p-4 w-full h-full">
            <button className="text-[#7a1622] text-4xl mx-auto block" onClick={toggleMenu}>&#10005;</button>
            <ul className="text-white font-amita text-4xl flex flex-col gap-6 mt-10 justify-center font-bold items-center">
              <li data-aos="fade-left" data-aos-duration="1000" onClick={()=>router.push("/")} className={`${router.pathname === "/" && "text-white border-b-4 border-[#7a1622]"}`}>HOME</li>
              <li data-aos="fade-left" data-aos-duration="1100" onClick={()=>router.push("/about")} className={`${router.pathname === "/about" && "text-white border-b-4 border-[#7a1622]"}`}>ABOUT US</li>
              <li data-aos="fade-left" data-aos-duration="1200" onClick={()=>router.push("/store")} className={`${router.pathname === "/store" && "text-white border-b-4 border-[#7a1622]"}`}>STORE</li>
              <li data-aos="fade-left" data-aos-duration="1300" onClick={()=>router.push("/prices")} className={`${router.pathname === "/prices" && "text-white border-b-4 border-[#7a1622]"}`}>PRICES</li>
              <li data-aos="fade-left" data-aos-duration="1400" onClick={()=>router.push("/contact")} className={`${router.pathname === "/contact" && "text-white border-b-4 border-[#7a1622]"}`}>CONTACT</li>
              <li data-aos="fade-left" data-aos-duration="1500" onClick={()=>router.push("/faq")} className={`${router.pathname === "/faq" && "text-white border-b-4 border-[#7a1622]"}`}>FAQ</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
