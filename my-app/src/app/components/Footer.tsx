import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 text-xl">Anwar Al Harmain</span>
          </a>
          <div className="flex flex-col md:flex-row text-center md:text-left md:ml-4 md:pl-4 md:border-l-2 md:border-gray-700">
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Near Meezan Bank Kutchary Road, Sialkot.
              <br /> Cell: +92-300-8617899
              <br />
              LandLine: +92-52-4265181-82
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0 md:ml-4 md:pl-4">
              ©2024 copyrights ANWAAR AL HARMAIN <br />
              TRAVEL & TOURS.
              <br /> All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <span className="inline-flex justify-center md:justify-start space-x-2">
              <div className="bg-white p-1 rounded-md">
                <Image
                  src={"/IATA.png"}
                  alt="verified"
                  height={30}
                  width={150}
                />
              </div>
              <div className="bg-white p-1 rounded-md">
                <Image
                  src={"/taaplogo.jpg"}
                  alt="verified"
                  height={30}
                  width={150}
                />
              </div>
              <div className="bg-white p-1 rounded-md">
                <Image
                  src={"/religionaffairs.jpg"}
                  alt="verified"
                  height={30}
                  width={180}
                />
              </div>
            </span>
            <span className="inline-flex mt-4 md:mt-0 md:ml-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="ml-3 text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="ml-3 text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
