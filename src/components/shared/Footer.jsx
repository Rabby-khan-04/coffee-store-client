import footerBG from "../../assets/image/foote-bg.jpg";
import copyRightBG from "../../assets/image/copyright-bg.jpg";
import logo from "../../assets/image/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div
        className="bg-cover bg-center bg-no-repeat pt-32 pb-12"
        style={{ background: `url(${footerBG})` }}
      >
        <div className="container grid grid-cols-2 gap-32">
          <div>
            <img src={logo} className="h-24 inline-block mb-6" alt="logo" />
            <h2 className="text-5xl font-rancho text-dark_sienna text__shadow mb-8">
              Espresso Emporium
            </h2>
            <p className="text-xl font-raleway text-eerie_black mb-8">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>

            <div className="text-[40px] text-dark_sienna flex items-center gap-5 mb-8">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
            <h2 className="text-5xl font-rancho text-dark_sienna text__shadow mb-8">
              Get in Touch
            </h2>

            <div className="text-eerie_black flex items-center gap-6 mb-5">
              <MdCall className="text-2xl" />
              <p className="text-xl">+88 01533 333 333</p>
            </div>
            <div className="text-eerie_black flex items-center gap-6 mb-5">
              <MdEmail className="text-2xl" />
              <p className="text-xl">info@gmail.com</p>
            </div>
            <div className="text-eerie_black flex items-center gap-6 mb-5">
              <FaLocationDot className="text-2xl" />
              <p className="text-xl">72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
          <div className="self-center">
            <h2 className="text-5xl font-rancho text-dark_sienna text__shadow mb-8">
              Connect with Us
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="input w-full bg-white block"
              />
              <input
                type="text"
                placeholder="Email"
                className="input w-full bg-white block"
              />
              <textarea
                className="textarea bg-white block w-full"
                placeholder="Bio"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="text-2xl font-rancho text-dark_sienna rounded-full inline-block py-2 px-5 border-2 border-dark_sienna text__shadow cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat py-3"
        style={{ background: `url(${copyRightBG})` }}
      >
        <p className="text-xl text-white font-rancho text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
