import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return re.test(String(phone));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address!",
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid phone number!",
      });
      return;
    }

    const whatsappNumber = "+994558390077"
    const whatsappMessage = `Yeni Mesaj!\n\nAd: ${formData.fullname}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\nMesaj: ${formData.message}`;

    console.log(whatsappMessage);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    Swal.fire({
      icon: "success",
      title: "Thanks...",
      text: "Your message has been sent succesfully!",
    });
    3;

    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col text- w-full text-[#e7e7e7] sm:w-1/2 gap-10 sm:gap-5">
      <div
        data-aos="fade-down"
        className="flex flex-col text-center sm:text-start gap-5"
      >
        <p className="font-amita text-4xl">{t("contact1")}</p>
        <p className="font-poppins sm:text-lg leading-7">
        {t("contact2")}
        </p>
      </div>

      <form
        data-aos="fade-up"
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 font-light">
          <label className="font-poppins">{t("contact3")}</label>
          <input
            className="bg-[#ccc] outline-none rounded-sm p-2 text-black font-medium font-poppins capitalize"
            type="text"
            value={formData.fullname}
            onChange={handleChange}
            name="fullname"
          />
        </div>

        <div className="flex flex-col gap-2 font-light">
          <label className="font-poppins">{t("contact4")}</label>
          <input
            className="bg-[#ccc]  outline-none rounded-sm text-black font-medium font-poppins p-2"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-poppins font-light">{t("contact5")}</label>
          <input
            className="bg-[#ccc]  outline-none rounded-sm text-black font-medium font-poppins p-2"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>

        <div className="flex flex-col gap-2 font-light">
          <label className="font-poppins">{t("contact6")}</label>
          <textarea
            className="bg-[#ccc]  outline-none rounded-sm text-black font-medium font-poppins p-2"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            name="message"
          ></textarea>
        </div>

        <button className="bg-[#dbae01] w-full text-xl font-light mt-10 sm:w-max text-[#e7e7e7] hover:bg-[#7a1622] transition-all duration-300 p-4 rounded-sm font-poppins">
        {t("contact7")}
        </button>
      </form>
    </div>
  );
};
