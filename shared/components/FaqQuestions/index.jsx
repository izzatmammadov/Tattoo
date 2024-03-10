import React from "react";
import { OneQuestion } from "../OneQuestion";

export const FaqQuestions = () => {
  return (
    <section className="py-10 bg-[#0a0a0a] px-5 sm:px-0 flex flex-col justify-center items-center gap-10">
      <OneQuestion
        title={"Does getting a tattoo hurt?"}
        desc={
          "The pain level of getting a tattoo varies depending on factors such as the location on the body, your pain tolerance, and the size and intricacy of the design. Generally, tattoos involve some level of discomfort, often described as a sensation similar to scratching or a sunburn. However, many people find the pain manageable and worth it for the end result."
        }
      />
      <OneQuestion
        title={"How do I choose the right tattoo design?"}
        desc={
          "Selecting a tattoo design is a personal decision. Consider factors such as your interests, values, cultural background, and aesthetics. Take your time to research different styles, symbols, and artists to find inspiration and ensure the design reflects your individuality and resonates with you for years to come."
        }
      />
      <OneQuestion
        title={"What should I consider before getting a tattoo?"}
        desc={
          "Before getting a tattoo, it's important to think about several factors. These include the permanence of tattoos, potential social or professional implications, proper aftercare, and the reputation and expertise of the tattoo artist. Additionally, consider any allergies or medical conditions that might affect your ability to get a tattoo safely."
        }
      />
      <OneQuestion
        title={"How do I care for my new tattoo?"}
        desc={
          "Proper aftercare is crucial for the healing and longevity of your tattoo. Your tattoo artist will provide specific instructions, but general guidelines include keeping the tattoo clean and moisturized, avoiding exposing it to direct sunlight, refraining from picking at scabs, and avoiding swimming or soaking the tattoo until it's fully healed, which typically takes a few weeks. Following these instructions will help ensure your tattoo heals properly and looks its best for years to come."
        }
      />
    </section>
  );
};
