import Image from "next/image";
import React, { useState } from "react";

export const OneQuestion = ({ title, desc }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div onClick={() => setShowDesc(!showDesc)} data-aos="fade-up" className="flex flex-col text-center sm:text-start sm:flex-row cursor-pointer justify-between w-full sm:w-9/12 items-center bg-black border-2 border-[#e7e7e7] p-2 sm:p-4 rounded-sm">
      <div className="flex flex-col gap-2">
        <p className="font-amita text-xl sm:text-4xl text-[#dbae01]">{title}</p>
        <p className={`font-poppins text-[#e7e7e7] leading-7 overflow-hidden transition-all duration-300 ${showDesc ? 'max-h-max' : 'max-h-0'}`}>
          {desc}
        </p>
      </div>
      {showDesc ? <Image width={25} height={0} src={"/arrow2_faq.png"} alt="arrow"/> : <Image width={25} height={0} src={"/arrow_faq.png"} alt="arrow"/>}
        
    </div>
  );
};
