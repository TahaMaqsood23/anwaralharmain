import { Button } from "@/components/ui/button";
import { Contact, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <div>
      <SubHeader />
      <div className="text-gray-600 body-font bg-transparent">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <div className="flex font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
              <Image src={"/logo.png"} height={45} width={55} alt="logo" />
              <span className="ml-3 text-xl">AHTT</span>
            </div>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold gap-5">
            <Link href={"/"}>
              <div className="hover:text-gray-900 transition duration-300">Home</div>
            </Link>
            <Link href={"/"}>
              <div className="hover:text-gray-900 transition duration-300">Our Services</div>
            </Link>
            <Link href={"/"}>
              <div className="hover:text-gray-900 transition duration-300">Umrah Packages</div>
            </Link>
          </nav>
          <div className="flex flex-col sm:flex-row items-center mt-4 md:mt-0 gap-2 sm:gap-2">
            <Link href={"#Contact-us"}>
              <Button className="inline-flex items-center border-0 py-1 px-3 rounded text-base bg-amber-800 text-white hover:bg-amber-700 transition duration-300 gap-2">
                Contact Us
                <Phone />
              </Button>
            </Link>
            <div className="text-white bg-amber-800 inline-flex items-center border-0 py-1 px-3 rounded text-base hover:bg-gray-800 transition duration-300">
              <Link href={"https://www.anwaaralharmain.com/apps/login.php"}>
                <Contact width={22} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
