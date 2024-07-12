import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contactus = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          {/* Map iframe remains unchanged */}
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13460.18113556233!2d74.5375249!3d32.4982188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebe4549c7b55%3A0xce36c357cb048614!2sAnwaar%20Al%20Harmain%20Travel%20and%20Tours!5e0!3m2!1sen!2s!4v1720749272130!5m2!1sen!2s"
            style={{ filter: " contrast(1.2) opacity(0.7)" }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white bg-opacity-80 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-3xl mb-4 font-medium title-font">
              <span className="border-b-4 border-yellow-500 pb-2 ">
                Contact Us
              </span>
            </h2>
            <div className="mb-6">
              <p className="leading-7 text-lg text-gray-800">
                <span className="font-semibold">Address:</span>
                <br />
                Kutchery Road, Near Meezan Bank LTD,
                <br />
                Mohalla Water Works, Sialkot, Punjab 51310
              </p>
            </div>
            <div className="mb-6">
              <p className="leading-7 text-lg text-gray-800">
                <span className="font-semibold">Phone Numbers:</span>
                <br />
                Mobile: +92-300-8617899
                <br />
                Mobile: +92-317-7357650
                <br />
                Landline: 052-4570059
              </p>
            </div>
            <div className="mb-6">
              <p className="leading-7 text-lg text-gray-800">
                <span className="font-semibold">Email:</span>
                <br />
                <a
                  href="mailto:info@anwaaralharmain.com"
                  className="text-blue-500 hover:text-indigo-800"
                >
                  info@anwaaralharmain.com
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/anwaaralharmain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={24}
                  className="text-blue-500 hover:text-indigo-800"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/anwaar-al-harmain-travel-and-tours"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="text-blue-600 hover:text-blue-800"
                />
              </a>
              <a
                href="https://www.instagram.com/anwaaralharmaintravelandtours/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={24}
                  className="text-purple-600 hover:text-purple-800"
                />
              </a>
              <a
                href="https://wa.me/+923177357650"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={24}
                  className="text-green-600 hover:text-green-800"
                />
              </a>
            </div>
            <div>
              <p className="leading-7 text-lg text-gray-800">
                <span className="font-semibold">Map:</span>
                <br />
                <Link
                  target="_blank"
                  href={"https://maps.app.goo.gl/eGkxibANbEjvKPJA7"}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  View on Google Maps
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
