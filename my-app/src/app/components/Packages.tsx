import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaBed, FaCar, FaPassport, FaUserFriends } from "react-icons/fa";

const Packages = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/madinapic1.jpg')" }}
    >
      <div className="text-gray-600 body-font bg-black bg-opacity-75 min-h-screen flex items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 justify-between">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300 space-y-1">
                Umrah Packages
              </h1>
              <div className="h-1 w-80 bg-yellow-500 rounded mt-1" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 font-semibold mx-auto mt-4">
              Embark on a spiritual journey with our exceptional Umrah services,
              designed to cater to your every need and ensure a fulfilling
              pilgrimage. We offer four comprehensive packages, each
              meticulously crafted to provide comfort, convenience, and a deeply
              enriching experience. Choose the one that best suits your
              requirements and let us take care of the rest.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Economy Package */}
            <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl relative">
                <div className="relative h-56 mb-6">
                  <Image
                    className="rounded object-contain"
                    src="/packagepic1.jpg"
                    alt="Economy Package"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Economy Package
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    17 nights in -
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Makkah: 10 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Madinah: 7 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaCar className="mr-2" />
                    Private Transfer Airport / Makkah / Madinah
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaPassport className="mr-2" />
                    Umrah Visa Processing
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Visa Documentation
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Customer Services
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button className="border-black hover:border-black">
                    Book Now!
                  </Button>
                  <Button className="border-black hover:border-black">
                    Get Details
                  </Button>
                </div>
              </div>
            </div>
            {/* Silver Package */}
            <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl relative">
                <div className="relative h-56 mb-6">
                  <Image
                    className="rounded object-contain"
                    src="/packagepic2.jpg"
                    alt="Silver Package"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Silver Package
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    11 nights in -
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Makkah: 8 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Madinah: 3 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaCar className="mr-2" />
                    Private Transfer Airport / Makkah / Madinah
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaPassport className="mr-2" />
                    Umrah Visa Processing
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Visa Documentation
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Customer Services
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button className="border-black hover:border-black">
                    Book Now!
                  </Button>
                  <Button className="border-black hover:border-black">
                    Get Details
                  </Button>
                </div>
              </div>
            </div>
            {/* Golden Package */}
            <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl relative">
                <div className="relative h-56 mb-6">
                  <Image
                    className="rounded object-contain"
                    src="/packagepic3.jpg"
                    alt="Golden Package"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Golden Package
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />6 nights in -
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Makkah: 6 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Madinah: 8 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaCar className="mr-2" />
                    Private Transfer Airport / Makkah / Madinah
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaPassport className="mr-2" />
                    Umrah Visa Processing
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Visa Documentation
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Customer Services
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button className="border-black hover:border-black">
                    Book Now!
                  </Button>
                  <Button className="border-black hover:border-black">
                    Get Details
                  </Button>
                </div>
              </div>
            </div>
            {/* Budget Package */}
            <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl relative">
                <div className="relative h-56 mb-6">
                  <Image
                    className="rounded object-contain"
                    src="/packagepic4.jpg"
                    alt="Budget Package"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Budget Package
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />7 nights in -
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Makkah: 7 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaBed className="mr-2" />
                    Madinah: 7 nights
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaCar className="mr-2" />
                    Private Transfer Airport / Makkah / Madinah
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaPassport className="mr-2" />
                    Umrah Visa Processing
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Visa Documentation
                  </p>
                  <p className="leading-relaxed text-base flex items-center">
                    <FaUserFriends className="mr-2" />
                    Customer Services
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button className="border-black hover:border-black">
                    Book Now!
                  </Button>
                  <Button className="border-black hover:border-black">
                    Get Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
