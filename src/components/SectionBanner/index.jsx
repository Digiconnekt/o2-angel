/* eslint-disable react/prop-types */

const SectionBanner = ({ title, subTitle, bgImg }) => {
  return (
    <>
      <div
        className={`${!bgImg && "bg-[#EEEFFB]"} py-20`}
        style={
          bgImg && {
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }
        }
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className={`text-center text-4xl font-bold text-white`}>
            {title}
          </h1>
          <p
            className={`text-center text-lg mt-4 max-w-lg mx-auto text-gray-200`}
          >
            {subTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionBanner;
