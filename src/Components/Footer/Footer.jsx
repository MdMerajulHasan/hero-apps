import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-4 md:pt-7">
      <div className="flex flex-col md:flex-row md:justify-around md:items-center">
        <div className="mx-auto">
          <h4 className="font-bold">Links</h4>
          <ul className="text-xs md:text-sm space-y-2">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Help & Support</a>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h4 className="font-bold">Go To Page</h4>
          <ul className="text-xs md:text-sm space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/all-apps">Apps</a>
            </li>
            <li>
              <a href="/installed">Installation</a>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h4 className="font-bold">Find Us On</h4>
          <ul className="text-xs md:text-sm space-y-2">
            <li>
              <a
                className="flex gap-0.5 items-center"
                target="_blank"
                href="https://facebook.com"
              >
                <FaFacebook></FaFacebook>Facebook
              </a>
            </li>
            <li>
              <a
                className="flex gap-0.5 items-center"
                target="_blank"
                href="https://linkedin.com"
              >
                <FaLinkedin></FaLinkedin>
                Linked In
              </a>
            </li>
            <li>
              <a
                className="flex gap-0.5 items-center"
                target="_blank"
                href="https://x.com/?lang=en"
              >
                <FaSquareXTwitter></FaSquareXTwitter> X
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs py-4">Copyright &copy; 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
