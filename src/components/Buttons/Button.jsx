/* eslint-disable react/prop-types */

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ title, type, Icon, extraClasses, onClick, isLoading }) => {
  return (
    <>
      <button
        type={type}
        className={`flex items-center gap-3 justify-center bg-primary border-[1px] border-primary text-white py-3 px-5 rounded-3xl hover:bg-secondary text-md font-semibold ${extraClasses} ${
          isLoading && "cursor-not-allowed"
        }`}
        onClick={onClick}
        disabled={isLoading}
      >
        {title}
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          Icon && <Icon />
        )}
      </button>
    </>
  );
};

export default Button;
