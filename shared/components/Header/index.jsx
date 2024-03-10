import styles from "./header.module.css";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const getContent = () => {
    const { pathname } = router;

    switch (pathname) {
      case "/":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            Home
          </h1>
        );
      case "/about":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            About
          </h1>
        );
      case "/store":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            Store
          </h1>
        );
      case "/prices":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            Prices
          </h1>
        );
      case "/contact":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            Contact
          </h1>
        );
      case "/faq":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            FAQ
          </h1>
        );
      case "/aftercare":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            Aftercare
          </h1>
        );
      case "/about-muhammed-rzayev":
        return (
          <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">
            ARTIST
          </h1>
        );
    }
  };

  return (
    <header className="h-[100vh]">
      <div className={`${styles.header}`}>
        <div
          className="h-1/2 flex flex-col justify-center items-center"
          data-aos="zoom-in"
        >
          {getContent()}
          <Image
            className="mt-auto mb-auto cursor-pointer hover:scale-105 transition-all duration-300"
            width={50}
            height={0}
            src={"/downfill.png"}
            alt="down"
            onClick={() => {
              window.scrollBy({
                top: 400,
              });
            }}
          />
        </div>
      </div>
      <Navbar />
    </header>
  );
};
