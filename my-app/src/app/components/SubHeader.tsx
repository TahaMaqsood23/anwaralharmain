import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const SubHeader = () => {
  return (
    <div className="bg-amber-800 text-white py-2 text-center">
      <div className="container mx-auto flex justify-center items-center">
        <p className="mr-4">
          <span className="mr-2"></span>Best Umrah travel agency In PK!
        </p>
        <div className="flex space-x-4">
          <a href="https://www.whatsapp.com" className="text-white">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com" className="text-white">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" className="text-white">
            <FaInstagram />
          </a>
          <a href="tel:+1234567890" className="text-white">
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
