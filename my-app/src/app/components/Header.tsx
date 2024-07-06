import { Button } from "@/components/ui/button";
import { Contact, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubHeader from "./SubHeader";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdAccountBox } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <SubHeader />
      <div className="text-gray-600 body-font bg-transparent">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <div className="flex font-medium items-center  text-gray-900 mb-4 md:mb-0">
              <Image src={"/logo.png"} height={68} width={68} alt="logo" />
              <span className="ml-3 text-xl">AHTT</span>
            </div>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
            <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Home</div>
            </Link>

            <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Our Services</div>
            </Link>
            <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Umrah Packages</div>
            </Link>
            {/* <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Umrah Login</div>
            </Link> */}
          </nav>
          <Button className="inline-flex items-center  border-0 py-1 px-3 rounded text-base mt-4 md:mt-0 gap-2">
            Contact Us
            <Phone />
          </Button>
          <div className="text-white bg-gray-900 inline-flex items-center  border-0 py-1 px-3 rounded text-base mt-4 md:mt-0 ml-2">
            <Link href={'https://www.anwaaralharmain.com/apps/login.php'}><Contact width={22} height={30} /></Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
