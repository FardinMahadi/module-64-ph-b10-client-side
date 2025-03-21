import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-neutral text-neutral-content sm:grid sm:grid-cols-2 gap-0">
        <aside className="flex items-center justify-center flex-col py-10 bg-[#1F2937] w-full">
          <h6 className="text-xl font-semibold">CONTACT US</h6>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </aside>
        <nav className="flex items-center justify-center flex-col py-10 bg-[#111827] w-full h-full">
          <h6 className="text-xl font-semibold">Follow US</h6>
          <p>Join us on social media</p>
          <div className="grid grid-flow-col gap-4">
            <a className="hover:text-gray-400 transition text-xl cursor-pointer">
              <FaFacebookF></FaFacebookF>
            </a>
            <a className="hover:text-gray-400 transition text-xl cursor-pointer">
              <FaInstagram></FaInstagram>
            </a>
            <a className="hover:text-gray-400 transition text-xl cursor-pointer">
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </nav>
      </div>

      {/* bottom */}
      <div className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
