import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

const SubHeader = () => {
  return (
    <div className="bg-amber-800 text-white py-2 text-center">
      <div className="container mx-auto flex justify-center items-center">
        <p className="mr-4">
          <span className="mr-2"></span>Making Your Umrah Journey Memorable and Hassle-Free!
        </p>
        <div className="flex space-x-4 ">
          <Link href="https://wa.me/+923177357650" className="text-white" target="_blank">
            <FaWhatsapp />
          </Link>
          <Link href="https://www.facebook.com/anwaaralharmain" className="text-white" target="_blank">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/anwaaralharmaintravelandtours/" className="text-white" target="_blank">
            <FaInstagram />
          </Link>
          <Link href={'https://www.linkedin.com/company/anwaar-al-harmain-travel-and-tours/'} className="text-white" target="_blank">
          <FaLinkedin/>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
