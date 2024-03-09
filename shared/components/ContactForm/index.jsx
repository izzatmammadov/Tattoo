import React from 'react'

export const ContactForm = () => {
  return (
    <div className="flex flex-col text-white w-full sm:w-1/2 gap-10 sm:gap-5">
          <div data-aos="fade-down" className="flex flex-col text-center sm:text-start gap-5">
            <p className="font-bold font-amita text-4xl">GET IN TOUCH</p>
            <p className="font-poppins text-lg sm:text-sm leading-7">
              We can be contacted by telephone, email or in writing, please find
              the relevant information below. Alternatively you can send us an
              enquiry via the online enquiry form.
            </p>
          </div>

          <form data-aos="fade-up" className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 font-light">
              <label className="font-poppins">Your Fullname</label>
              <input
                className="bg-[#ccc] outline-none rounded-sm p-2 text-black font-medium font-poppins capitalize"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2 font-light">
              <label className="font-poppins">Your Email</label>
              <input
                className="bg-[#ccc]  outline-none rounded-sm text-black font-medium font-poppins p-2"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins font-light">Phone</label>
              <input
                className="bg-[#ccc]  outline-none rounded-sm text-black font-medium font-poppins p-2"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2 font-light">
              <label className="font-poppins">Message</label>
              <textarea
                className="bg-[#ccc]  outline-none rounded-sm text-black font-medium font-poppins p-2"
                rows={5}
              ></textarea>
            </div>

            <button className="bg-[#dbae01] w-full mt-10 sm:w-max text-white hover:bg-[#7a1622] transition-all duration-300 p-4 rounded-sm font-poppins">
              SEND MESSAGE
            </button>
          </form>
        </div>
  )
}
