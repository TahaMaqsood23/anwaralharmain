import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const SubHeader = () => {
  return (
    <div className="bg-amber-800 text-white py-2 text-center">
      <div className="container mx-auto flex justify-center items-center">
        <p className="mr-4">
          <span className="mr-2"></span>Making Your Umrah Journey Memorable and Hassle-Free!
        </p>
        <div className="flex space-x-4 ">
          <a href="https://wa.me/+923177357650" className="text-white">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/anwaaralharmain" className="text-white">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/anwaaralharmaintravelandtours/" className="text-white">
            <FaInstagram />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
