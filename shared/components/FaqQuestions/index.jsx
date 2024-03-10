import React from "react";
import { OneQuestion } from "../OneQuestion";
import { useTranslation } from "react-i18next";

export const FaqQuestions = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 bg-[#0a0a0a] px-5 sm:px-0 flex flex-col justify-center items-center gap-10">
      <OneQuestion
        title={t("faq1")}
        desc={
          t("faq2")
        }
      />
      <OneQuestion
        title={t("faq3")}
        desc={
          t("faq4")
        }
      />
      <OneQuestion
        title={t("faq5")}
        desc={
          t("faq6")
        }
      />
      <OneQuestion
        title={t("faq7")}
        desc={
          t("faq8")
        }
      />
    </section>
  );
};
