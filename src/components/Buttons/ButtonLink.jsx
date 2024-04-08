/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const ButtonLink = ({ title, to, extraClasses, newTab = false }) => {
  return (
    <>
      <NavLink
        to={to}
        className={`block bg-primary text-white py-3 px-5 rounded-3xl hover:bg-secondary text-md font-semibold ${extraClasses}`}
        target={newTab ? "_blank" : "_self"}
      >
        {title}
      </NavLink>
    </>
  );
};

export default ButtonLink;
