import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import ButtonLink from "../Buttons/ButtonLink";
import headerLinks from "../../utils/headerLinks";

const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className={`w-full sticky top-0 left-0 z-50 bg-white`}>
        <div
          className={`mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex items-center justify-between py-4 md:px-10 px-7 `}
        >
          {/* logo section */}
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="font-bold text-2xl cursor-pointer flex items-center gap-1"
          >
            <img
              src="../../../images/logo.png"
              alt="O2 Angel"
              className="w-20"
            />
          </NavLink>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-10 cursor-pointer lg:hidden"
          >
            {open ? <RxCross1 size={24} /> : <RiMenu3Fill size={24} />}
          </div>

          <ul
            className={`lg:flex lg:items-center bg-white lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-[85px]" : "top-[-490px]"
            }`}
          >
            {headerLinks.map((link) => (
              <li
                className="lg:ml-8 lg:my-0 my-4 font-semibold"
                key={link.name}
              >
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary hover:text-primary duration-300 uppercase pb-2 border-b-2 border-primary"
                      : "text-black hover:text-primary duration-300 uppercase pb-2 border-b-2 border-transparent hover:border-primary"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="lg:ms-5 mt-6 lg:mt-0">
              <ButtonLink title={"Sign Up / Sign In"} to={"#"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
