"use client";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div id="contact" className="lg:flex mb-0 lg:h-10 sm:flex lg:justify-between lg:px-3 bg-yellow-100 lg:items-center lg:mt-40">
      <div className="rounded-lg p-4 flex lg:items-center lg:justify-center">
        <div className="mr-4">
          <FaPhoneAlt color="black"/>
        </div>
        <p className="text-lg font-bold text-black">(+91) 7380534745</p>
      </div>
      <div className=" rounded-lg p-4 flex lg:items-center lg:justify-center">
        <div className="mr-4">
          <IoIosMail color="black"/>
        </div>
        <p className="text-lg font-bold text-black">shiv2002am@gmail.com</p>
      </div>
      <div className=" rounded-lg p-4 flex lg:items-center lg:justify-center">
        <div className="mr-4">
          <FaLocationDot color="black"/>
        </div>
        <p className="text-lg font-bold text-black">C27/111 B6 Jagatganj, Varanasi, UP, India</p>
      </div>
    </div>
  );
};

export default Contact;
