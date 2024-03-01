/* eslint-disable react/prop-types */

const Heading = ({ heading, extraClasses }) => {
  return (
    <>
      <h2 className={`text-4xl font-semibold ${extraClasses}`}>{heading}</h2>
    </>
  );
};

export default Heading;
