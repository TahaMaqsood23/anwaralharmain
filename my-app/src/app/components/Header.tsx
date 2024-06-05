import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";
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
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src={"/logo.png"} height={60} width={60} alt="logo" />
              <span className="ml-3 text-xl">AHTT</span>
            </div>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Home</div>
            </Link>
            <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Umrah Packages</div>
            </Link>
            <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Our Services</div>
            </Link>
            <Link href={"/"}>
              <div className="mr-5 hover:text-gray-900"> Umrah Login</div>
            </Link>
          </nav>
          <Button className="inline-flex items-center  border-0 py-1 px-3   rounded text-base mt-4 md:mt-0 gap-2">
            Contact Us
            <Contact width={22} height={22} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
