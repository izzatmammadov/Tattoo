import React, { useState } from "react";

export const OneQuestion = ({ title, desc }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div data-aos="fade-up" className="flex justify-between w-full sm:w-9/12 items-center text-white border-2 border-[#] border-[#ccc] p-2 sm:p-4 rounded-sm">
      <div className="flex flex-col gap-2">
        <p className="font-amita text-lg sm:text-2xl text-[#dbae01] font-bold">{title}</p>
        <p className={`font-poppins text-md overflow-hidden transition-all duration-300 ${showDesc ? 'max-h-max' : 'max-h-0'}`}>
          {desc}
        </p>
      </div>
      <button className="text-[#dbae01] text-2xl font-bold" onClick={() => setShowDesc(!showDesc)}>
        &#8286;
      </button>
    </div>
  );
};
