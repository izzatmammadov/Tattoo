import styles from "./header.module.css";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Language } from "../Language";

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const getContent = () => {
    const { pathname } = router;

    switch (pathname) {
      case "/":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            {t("nav1")}
          </h1>
        );
      case "/about":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            {t("nav2")}
          </h1>
        );
      case "/store":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            Store
          </h1>
        );
      case "/prices":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            Prices
          </h1>
        );
      case "/contact":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            {t("nav3")}
          </h1>
        );
      case "/faq":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            {t("nav5")}
          </h1>
        );
      case "/aftercare":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            {t("nav4")}
          </h1>
        );
      case "/about-muhammed-rzayev":
        return (
          <h1 className="font-amita text-5xl text-white backdrop-blur-sm p-2">
            {t("nav6")}
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
          <Language />
          <Image
            className="my-auto cursor-pointer hover:scale-110 transition-all duration-300"
            width={50}
            height={0}
            src={"/downfill.png"}
            alt="down"
            onClick={() => {
              window.scrollBy({
                top: 460,
              });
            }}
          />
        </div>
      </div>
      <Navbar />
    </header>
  );
};
