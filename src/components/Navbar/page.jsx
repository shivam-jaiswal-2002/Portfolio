"use client";
import Link from 'next/link';
import Image from 'next/image';
import SJ from "../../../public/SJ3.png";

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center ml-20">
                  <Image src={SJ} alt="Logo" width={150} height={150} className="logo" id='sj' />
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" flex items-baseline space-x-4">
              <Link href="/#skills" className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Skills</Link>
              <Link href="/#projects" className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Projects</Link>
              <Link href="/#certifications" className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Certificates</Link>
              <Link href="/#codingprofile" className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Coding Profile</Link>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
