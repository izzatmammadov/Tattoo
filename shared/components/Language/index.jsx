import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Language = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [buttonScale, setButtonScale] = useState("");

  useEffect(() => {
    setButtonScale(selectedLanguage === "az" ? "scale-105" : "scale-100");
  }, [selectedLanguage]);

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div className="flex mt-2 gap-2 justify-center w-max items-center text-center">
      <button
        className={`transition-all duration-300 ${
          selectedLanguage === "en" ? " scale-125" : "scale-90"
        }`}
        onClick={() => clickHandle("en")}
      >
        <Image width={40} height={0} src={"/usa.png"} alt="usa" />
      </button>
      <p className=" font-amita text-4xl font-bold text-white">/</p>
      <button
        className={`transition-all duration-300 ${
          selectedLanguage === "az" ? "scale-125" : "scale-90"
        }`}
        onClick={() => clickHandle("az")}
      >
        <Image width={40} height={0} src={"/aze.png"} alt="aze" />
      </button>
    </div>
  );
};
