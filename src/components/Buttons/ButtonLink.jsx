/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const ButtonLink = ({ title, to, extraClasses }) => {
  return (
    <>
      <NavLink
        to={to}
        className={`bg-primary text-white py-3 px-5 rounded-3xl hover:bg-secondary text-md font-semibold ${extraClasses}`}
      >
        {title}
      </NavLink>
    </>
  );
};

export default ButtonLink;
