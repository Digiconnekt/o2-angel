/* eslint-disable react/prop-types */

const Button = ({ title, type, Icon, extraClasses, onClick }) => {
  return (
    <>
      <button
        type={type}
        className={`flex items-center gap-3 justify-center bg-primary border-[1px] border-primary text-white py-3 px-5 rounded-3xl hover:bg-secondary text-md font-semibold ${extraClasses}`}
        onClick={onClick}
      >
        {title}
        {Icon && <Icon />}
      </button>
    </>
  );
};

export default Button;
