import Image from 'next/image'
import React from 'react'

export const ContactFind = () => {
  return (
    <div className="flex flex-col gap-10 sm:gap-10">
          <div data-aos="fade-down" className="text-[#e7e7e7] flex text-center sm:text-start flex-col">
            <p className="mb-3 text-4xl font-amita">FIND US</p>
            <a
              className="text-blue-400 flex flex-col gap-1 hover:text-blue-700"
              href="https://www.google.com/maps/place/Oskar+Market/@40.3731818,49.840519,15.82z/data=!4m6!3m5!1s0x40307db01a85fd4d:0x92cd1d6051a7d528!8m2!3d40.3734575!4d49.8400022!16s%2Fg%2F11c5304517?entry=ttu"
              target="_blank"
            >
              View larger map
              <Image
                className="hover:scale-95 transition-all duration-300"
                width={400}
                height={0}
                src={"/location.png"}
              />
            </a>
          </div>

          <div className="flex flex-col gap-10 sm:gap-7">
            <div data-aos="fade-up" className="flex-col text-[#e7e7e7] text-center sm:text-start">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Image
                  width={30}
                  height={0}
                  src={"/loc_icon.png"}
                  alt="location"
                />
                <p className="text-4xl font-amita ">ADRESS</p>
              </div>
              <p className='font-poppins'>9RFR+92J, Mardanov brothers, Baku 1005</p>
            </div>

            <div data-aos="fade-up" className="flex-col text-[#e7e7e7] text-center sm:text-start">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Image width={30} height={0} src={"/phone.png"} alt="phone" />
                <p className="text-4xl font-amita ">PHONE</p>
              </div>
              <p className='font-poppins'>(+994) 55 839 00 77</p>
            </div>

            <div data-aos="fade-up" className="flex-col text-[#e7e7e7] text-center sm:text-start">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Image width={30} height={0} src={"/mail.png"} alt="mail" />
                <p className="text-4xl font-amita ">MAIL</p>
              </div>
              <p className='font-poppins'>rzayevm507@gmail.com</p>
            </div>
          </div>
        </div>
  )
}
