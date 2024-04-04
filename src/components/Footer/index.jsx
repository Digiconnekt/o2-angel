import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {
  companyLinks,
  investmentsLinks,
  partnersLinks,
} from "../../utils/footerLinks";
import { socialMediaLinks } from "../../utils/socialMediaLinks";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
} from "../../utils/framerMotionHelper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-[#262E38] pt-14 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10 mb-3 md:mb-16">
            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <NavLink to={"/"}>
                <img src="../../../images/logo.png" alt="O2 Angle" />
              </NavLink>
              <p className="text-gray-300 mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, iusto. Accusantium rem numquam obcaecati officia
                iusto ea repellendus nulla sit.
              </p>
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
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
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-white text-xl font-semibold">Investments</p>
              <ul className="mt-5">
                {investmentsLinks.map((link, i) => (
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
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-white text-xl font-semibold">Partners</p>
              <ul className="mt-5">
                {partnersLinks.map((link, i) => (
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
            </motion.div>
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
            <motion.div
              className="col-span-12 md:col-span-8 text-center md:text-left"
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-gray-300 text-sm">
                Copyright &copy; {currentYear}. All Rights Reserved By O2 Angels
                Network.
              </p>
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-4"
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
