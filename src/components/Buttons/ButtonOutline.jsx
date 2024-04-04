/* eslint-disable react/prop-types */

const ButtonOutline = ({ title, type, Icon, extraClasses, onClick }) => {
  return (
    <>
      <button
        type={type}
        className={`flex items-center gap-3 justify-center bg-white text-primary border-[1px] border-primary py-3 px-5 rounded-3xl hover:bg-secondary hover:text-white text-md font-semibold ${extraClasses}`}
        onClick={onClick}
      >
        {title}
        {Icon && <Icon />}
      </button>
    </>
  );
};

export default ButtonOutline;
