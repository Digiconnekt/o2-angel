import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { accountLinks, companyLinks } from "../../utils/footerLinks";
import { socialMediaLinks } from "../../utils/socialMediaLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-[#262E38] pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-5 items-center border-b-[1px] pb-10 border-[#717272]">
            <div className="col-span-12 md:col-span-6">
              <h3 className="text-2xl font-bold text-white">
                <span className="text-[#4996F0] block mb-2">
                  Knowledge Is Power.
                </span>
                Sign up for our Newsletter.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="relative md:max-w-md md:ms-auto">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full py-3 rounded-3xl ps-4 pe-32 outline-none"
                />
                <div className="absolute right-0 top-0 bottom-0">
                  <button className=" bg-primary text-white py-3 px-5 rounded-3xl hover:bg-secondary text-md font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10 mb-3 md:mt-16 md:mb-16">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <NavLink to={"/"}>
                <img src="../../../images/logo.png" alt="O2 Angle" />
              </NavLink>
              <p className="text-gray-300 mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, iusto. Accusantium rem numquam obcaecati officia
                iusto ea repellendus nulla sit.
              </p>
              <div className="relative mt-5">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full h-12 rounded-3xl ps-4 pe-28 outline-none bg-gray-600 text-gray-300"
                />
                <div className="absolute right-1 bottom-1">
                  <button className="bg-gradient-to-tr from-[#8E2DE2] to-[#4A00E0] text-white w-10 h-10 flex items-center justify-center rounded-full hover:from-[#4A00E0] hover:to-[#8E2DE2] text-md font-semibold">
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-white text-xl font-semibold">Company</p>
              <ul className="mt-5">
                {companyLinks.map((link, i) => (
                  <li
                    key={i}
                    className={`${
                      i !== companyLinks.length - 1 &&
                      "border-b pb-3 mb-3 border-[#717272]"
                    }`}
                  >
                    <NavLink
                      to={link.to}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary duration-300"
                    >
                      <MdOutlineKeyboardDoubleArrowRight />
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-white text-xl font-semibold">Account</p>
              <ul className="mt-5">
                {accountLinks.map((link, i) => (
                  <li
                    key={i}
                    className={`${
                      i !== companyLinks.length - 1 &&
                      "border-b pb-3 mb-3 border-[#717272]"
                    }`}
                  >
                    <NavLink
                      to={link.to}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary duration-300"
                    >
                      <MdOutlineKeyboardDoubleArrowRight />
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-gray-300 text-center md:text-end">
            Site created & maintained by{" "}
            <NavLink
              to={"https://buildnetic.com"}
              target="_blank"
              className={
                "text-primary hover:text-secondary duration-300 font-semibold"
              }
            >
              Buildnetic
            </NavLink>
          </p>
        </div>

        <div className="border-t border-[#717272] mt-5"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-y-5 md:gap-10 py-6">
            <div className="col-span-12 md:col-span-8 text-center md:text-left">
              <p className="text-gray-300 text-sm">
                Copyright &copy; {currentYear}. All Rights Reserved By O2 Angels
                Network.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <ul className="flex items-center justify-center md:justify-end gap-4">
                {socialMediaLinks.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.to}
                      className={"text-gray-300 hover:text-primary"}
                    >
                      <link.icon />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
