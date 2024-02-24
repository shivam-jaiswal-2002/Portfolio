"use client";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="flex h-10 mb-0 justify-between px-3 bg-white items-center mt-40">
      <div className="rounded-lg p-4 flex items-center justify-center">
        <div className="mr-4">
          <FaPhoneAlt color="black"/>
        </div>
        <p className="text-lg font-bold text-black">7380534745</p>
      </div>
      <div className=" rounded-lg p-4 flex items-center justify-center ml-4">
        <div className="mr-4">
          <IoIosMail color="black"/>
        </div>
        <p className="text-lg font-bold text-black">shiv2002am@gmail.com</p>
      </div>
      <div className=" rounded-lg p-4 flex items-center justify-center ml-4">
        <div className="mr-4">
          <FaLocationDot color="black"/>
        </div>
        <p className="text-lg font-bold text-black">C27/111 B6 Jagatganj, Varanasi, UP, India</p>
      </div>
    </div>
  );
};

export default Contact;
